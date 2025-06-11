using AutoMapper;
using Domain.Entities;
using Microsoft.Extensions.Logging;
using Repository.Repositories.Interfaces;
using Service.DTOs.ProductDiscountDTOs;
using Service.DTOs.ProductDTOs;
using Service.Helpers.Responses;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ProductDiscountService : IProductDiscountService
    {
        private readonly IProductDiscountRepository _repository;
        private readonly IMapper _mapper;
        private readonly ILogger<ProductDiscountService> _logger;
        public ProductDiscountService(IProductDiscountRepository repository, IMapper mapper, ILogger<ProductDiscountService> logger)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public async Task<CreateResponse> CreateAsync(ProductDiscountCreateDTO entity)
        {
             await _repository.CreateAsync(_mapper.Map<ProductDiscount>(entity));
            _logger.LogInformation("Product discount created successfully.");
            return new CreateResponse
            {
                StatusCode = 200,
                Message = "Product discount created successfully."
            };
        }

        public async Task<CreateResponse> DeleteAsync(int id)
        {
            await _repository.DeleteByProductIdAsync(id);
            _logger.LogInformation($"Product discount with id {id} deleted successfully.");
            return new CreateResponse
            {
                StatusCode = 200,
                Message = "Product discount deleted successfully."
            };
        }

        public async Task<IEnumerable<ProductDiscountDTO>> GetAllAsync()
        {
            return _mapper.Map<IEnumerable<ProductDiscountDTO>>(await _repository.GetAllAsync());
        }

        public async Task<ProductDiscountDTO> GetByProductIdAsync(int id)
        {

            return _mapper.Map<ProductDiscountDTO>(await _repository.GetByProductIdAsync(id));
        }

        public async Task<CreateResponse> UpdateAsync(ProductDiscountUpateDTO entity)
        {
            var existingProductDiscount = await _repository.GetByIdAsync(entity.Id);
            if (existingProductDiscount == null)
            {
                _logger.LogWarning($"Product Discount with ID {entity.Id} not found.");
                return new CreateResponse
                {
                    StatusCode = 404,
                    Message = $"Product Discount with ID {entity.Id} not found."
                };
            }
            var updatedEntity = _mapper.Map<ProductDiscount>(entity);
            updatedEntity.Id = entity.Id;
            await _repository.UpdateAsync(updatedEntity);
            _logger.LogInformation($"Product Discount with ID {entity.Id} updated successfully.");
            return new CreateResponse
            {
                StatusCode = 200,
                Message = "Product Discount updated successfully."
            };
        }
    }
}
