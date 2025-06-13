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
                ProductFeatures = new List<ProductFeature>(),
                ProductImages = new List<ProductImage>()
            };
            
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

            _logger.LogInformation($"Product with id {product.Id} created successfully.");
            return new CreateResponse
            {
                StatusCode = 201,
                Message = "Product created successfully.",
            };
        }



        public Task<CreateResponse> UpdateAsync(ProductUpdateDTO entity)
        {
            throw new NotImplementedException();
        }





        public async Task<CreateResponse> DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
            _logger.LogInformation($"Product with id {id} deleted successfully.");
            return new CreateResponse { StatusCode = 200, Message = "Product deleted successfully." };
        }
        public async Task<IEnumerable<ProductDTO>> GetAllAsync() => _mapper.Map<IEnumerable<ProductDTO>>(await _repository.GetAllAsync());

        public async Task<ProductDTO> GetByIdAsync(int id) => _mapper.Map<ProductDTO>(await _repository.GetByIdAsync(id));

        
    }
}
