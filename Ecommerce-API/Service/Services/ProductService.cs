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
        public async Task UpdateAsync(ProductUpdateDTO entity)
        {
            var product = await _repository.GetByIdAsync(entity.Id);
            if (product == null)
                throw new KeyNotFoundException($"Product with id {entity.Id} not found.");
            _mapper.Map(entity, product);
            await _repository.UpdateAsync(product);
            _logger.LogInformation($"Product with ID {product.Id} Updated successfully.");
        }
    }
}