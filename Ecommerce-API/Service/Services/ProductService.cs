using AutoMapper;
using Azure.Core;
using Domain.Entities;
using Microsoft.Extensions.Logging;
using Repository.Repositories.Interfaces;
using Service.DTOs.ProductDTOs;
using Service.Helpers.Responses;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;
        private readonly ILogger<ProductService> _logger;
        private readonly IProductDiscountRepository _discountRepository;
        private readonly IProductImageRepository _productImageRepository;
        public ProductService(IProductRepository repository, IMapper mapper, ILogger<ProductService> logger)
        {
           _repository = repository ?? throw new ArgumentNullException(nameof(repository));
           _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
          _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
        public async Task<CreateResponse> CreateAsync(ProductCreateDTO entity)
        {
            var directory = Directory.GetCurrentDirectory();
            string imageFolder = Path.Combine(directory, "wwwroot/media");
            if (!Directory.Exists(imageFolder))
            {
                Directory.CreateDirectory(imageFolder);
            }
            var product = new Product
            {
                Name = entity.Name,
                Price = entity.Price,
                Description = entity.Description,
                CategoryId = entity.CategoryId,
                CreatedDate = DateTime.UtcNow
            };

            if (product.ProductImages == null)
            {
                product.ProductImages = new List<ProductImage>();
            }

            if (entity.Images != null && entity.Images.Count > 0)
            {
                for (int i = 0; i < entity.Images.Count; i++)
                {
                    var item = entity.Images[i];

                    if (item == null || item.Length == 0)
                    {
                        return new CreateResponse
                        {
                            StatusCode = 400,
                            Message = "Image is null or empty"
                        };
                    }

                    string filename = Guid.NewGuid().ToString() + "---" + item.FileName;

                    if (string.IsNullOrEmpty(filename))
                    {
                        return new CreateResponse
                        {
                            StatusCode = 400,
                            Message = "Image is null or empty"
                        };
                    }

                    string filepath = Path.Combine(imageFolder, filename);

                    using (FileStream stream = new FileStream(filepath, FileMode.Create))
                    {
                        await item.CopyToAsync(stream);
                    }

                    bool isMainImage = i == 0;

                    product.ProductImages.Add(new ProductImage
                    {
                        Image = filename,
                        Product = product,
                        MainImage = isMainImage
                    });
                }
            }

            var discounts = entity.ProductDiscounts.Select(mbox => new ProductDiscount
            {
                ProductId = mbox.ProductId,
                DiscountId = mbox.DiscountId
            }).ToList() ?? new List<ProductDiscount>();

            foreach (var discount in discounts)
            {
                 await _discountRepository.CreateAsync(discount);
            }
            await _repository.CreateAsync(product);
            _logger.LogInformation($"Product with ID {product.Id} created successfully.");
            return new CreateResponse
            {
                StatusCode = 20,
                Message = "Product created successfully",
            };
        }
        public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
        public Task<IEnumerable<ProductDTO>> FindByConditionAsync(Expression<Func<Product, bool>> predicate)
        {
            throw new NotImplementedException();
        }
        public async Task<IEnumerable<ProductDTO>> GetAllAsync() => _mapper.Map<IEnumerable<ProductDTO>>(await _repository.GetAllAsync());
        public async Task<ProductDTO> GetByIdAsync(int id) => _mapper.Map<ProductDTO>(await _repository.GetByIdAsync(id));
        public async Task<CreateResponse> UpdateAsync(ProductUpdateDTO entity)
        {
            var product = await _repository.GetByIdWithIncludesAsync(entity.Id);
            if (product == null)
            {
                return new CreateResponse
                {
                    StatusCode = 404,
                    Message = $"Product with id {entity.Id} not found."
                };
            }

            var directory = Directory.GetCurrentDirectory();
            string imageFolder = Path.Combine(directory, "wwwroot/media");
            if (!Directory.Exists(imageFolder))
            {
                Directory.CreateDirectory(imageFolder);
            }

            product.Name = entity.Name ?? product.Name;
            if (entity.Price==null && entity.Price==0)
            {
                product.Price = product.Price;
            }
            else
            {
                product.Price = entity.Price;
            }
            if (entity.CategoryId == null && entity.CategoryId == 0)
            {
                product.CategoryId = product.CategoryId;
            }
            else
            {
                product.CategoryId = entity.CategoryId;
            }
            if (entity.ProductTypeId == null && entity.ProductTypeId == 0)
            {
                product.ProductTypeId = product.ProductTypeId;
            }
            else
            {
                product.ProductTypeId = entity.ProductTypeId;
            }
            product.Description = entity.Description ?? product.Description;
            product.CreatedDate = product.CreatedDate; 

            if (entity.Images != null && entity.Images.Count > 0)
            {
                if (product.ProductImages != null)
                {
                    foreach (var oldImage in product.ProductImages)
                    {
                        string oldFilePath = Path.Combine(imageFolder, oldImage.Image);
                        if (File.Exists(oldFilePath))
                        {
                            File.Delete(oldFilePath);
                        }
                    }
                }
                await _productImageRepository.DeleteByProductIdAsync(product.Id); 
                product.ProductImages = new List<ProductImage>();
                for (int i = 0; i < entity.Images.Count; i++)
                {
                    var item = entity.Images[i];
                    if (item == null || item.Length == 0)
                    {
                        return new CreateResponse
                        {
                            StatusCode = 400,
                            Message = "Image is null or empty"
                        };
                    }

                    string filename = Guid.NewGuid().ToString() + "---" + item.FileName;
                    string filepath = Path.Combine(imageFolder, filename);

                    using (FileStream stream = new FileStream(filepath, FileMode.Create))
                    {
                        await item.CopyToAsync(stream);
                    }

                    bool isMainImage = i == 0;
                    product.ProductImages.Add(new ProductImage
                    {
                        Image = filename,
                        ProductId = product.Id,
                        MainImage = isMainImage
                    });
                }
            }

            if (entity.ProductDiscounts != null && entity.ProductDiscounts.Count > 0)
            {
                await _discountRepository.DeleteByProductIdAsync(product.Id); 

                var newDiscounts = entity.ProductDiscounts.Select(d => new ProductDiscount
                {
                    ProductId = product.Id,
                    DiscountId = d.DiscountId
                }).ToList();

                foreach (var discount in newDiscounts)
                {
                    await _discountRepository.CreateAsync(discount);
                }
            }

            await _repository.UpdateAsync(product);

            _logger.LogInformation($"Product with ID {product.Id} updated successfully.");

            return new CreateResponse
            {
                StatusCode = 200,
                Message = "Product updated successfully"
            };
        }
    }
}