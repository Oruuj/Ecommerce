using AutoMapper;
using Domain.Entities;
using Microsoft.Extensions.Logging;
using Repository.Data;
using Repository.Repositories.Interfaces;
using Service.DTOs.ProductDTOs;
using Service.Helpers.Responses;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;
        private readonly ILogger<ProductService> _logger;
        public ProductService(IProductRepository productRepository,IMapper mapper, ILogger<ProductService> logger,AppDbContext context)
        {
            _repository = productRepository ?? throw new ArgumentNullException(nameof(productRepository));
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
                Description = entity.Description,
                Price = entity.Price,
                Brand = entity.Brand,
                StockQuantity = entity.StockQuantity,
                CategoryId = entity.CategoryId,
                CreatedAt = DateTime.UtcNow,
                ProductFeatures = new List<ProductFeature>(),
                ProductImages = new List<ProductImage>()
            };

            if (entity.Images != null && entity.Images.Count > 0)
            {
                for (int i = 0; i < entity.Images.Count; i++)
                {
                    var file = entity.Images[i];

                    if (file == null || file.Length == 0)
                    {
                        return new CreateResponse
                        {
                            StatusCode = 400,
                            Message = "One or more images are empty."
                        };
                    }

                    string filename = Guid.NewGuid() + "---" + file.FileName;
                    string filepath = Path.Combine(imageFolder, filename);

                    using (var stream = new FileStream(filepath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    string imageUrl = Path.Combine("media", filename).Replace("\\", "/");

                    product.ProductImages.Add(new ProductImage
                    {
                        Image = imageUrl,
                        Product = product,
                        MainImage = i == 0 
                    });
                }
            }

            await _repository.CreateAsync(product);
            _logger.LogInformation($"Product with id {product.Id} created successfully.");

            return new CreateResponse
            {
                StatusCode = 201,
                Message = "Product created successfully."
            };
        }

        public async Task<CreateResponse> UpdateAsync(ProductUpdateDTO entity)
        {
            var product = await _repository.GetByIdAsync(entity.Id);
            if (product == null)
            {
                _logger.LogWarning($"Product with ID {entity.Id} not found.");
                return new CreateResponse
                {
                    StatusCode = 404,
                    Message = $"Product with ID {entity.Id} not found."
                };
            }

            product.Name = entity.Name ?? product.Name;
            product.Description = entity.Description ?? product.Description;
            product.Price = entity.Price != default ? entity.Price : product.Price;
            product.Brand = entity.Brand ?? product.Brand;
            product.StockQuantity = entity.StockQuantity != default ? entity.StockQuantity : product.StockQuantity;
            product.CategoryId = entity.CategoryId != default ? entity.CategoryId : product.CategoryId;

            var directory = Directory.GetCurrentDirectory();
            string imageFolder = Path.Combine(directory, "wwwroot/media");

            if (!Directory.Exists(imageFolder))
            {
                Directory.CreateDirectory(imageFolder);
            }

            if (entity.Images != null && entity.Images.Count > 0)
            {
                foreach (var oldImage in product.ProductImages)
                {
                    var oldFilePath = Path.Combine(directory, "wwwroot", oldImage.Image);
                    if (File.Exists(oldFilePath))
                    {
                        File.Delete(oldFilePath);
                    }
                }

                product.ProductImages.Clear();

                for (int i = 0; i < entity.Images.Count; i++)
                {
                    var file = entity.Images[i];

                    if (file == null || file.Length == 0)
                    {
                        continue;
                    }

                    string filename = Guid.NewGuid() + "---" + file.FileName;
                    string filepath = Path.Combine(imageFolder, filename);

                    using (var stream = new FileStream(filepath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    string imageUrl = Path.Combine("media", filename).Replace("\\", "/");

                    product.ProductImages.Add(new ProductImage
                    {
                        Image = imageUrl,
                        Product = product,
                        MainImage = i == 0
                    });
                }
            }

            await _repository.UpdateAsync(product);

            _logger.LogInformation($"Product with ID {entity.Id} updated successfully.");
            return new CreateResponse
            {
                StatusCode = 200,
                Message = $"Product with ID {entity.Id} updated successfully."
            };
        }






        public async Task<CreateResponse> DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
            _logger.LogInformation($"Product with id {id} deleted successfully.");
            return new CreateResponse { StatusCode = 200, Message = "Product deleted successfully." };
        }
        public async Task<IEnumerable<ProductDTO>> GetAllAsync() => _mapper.Map<IEnumerable<ProductDTO>>(await _repository.GetAllAsync());

        public async Task<ProductDTO> GetByIdAsync(int id) => _mapper.Map<ProductDTO>(await _repository.GetByIdAsync(id));

        public async Task<IEnumerable<ProductDTO>> GetAllWithInclude() => _mapper.Map<IEnumerable<ProductDTO>>(await _repository.GetAllWithInclude());

        public async Task<ProductDTO> GetByIdWithIncludeAsync(int id)
        {
            return _mapper.Map<ProductDTO>(await _repository.GetByIdWithIncludeAsync(id));
        }
    }
}
