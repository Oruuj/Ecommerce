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
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ProductFeatureService : IProductFeatureService
    {
        private readonly IProductFeatureRepository _repository;
        private readonly IMapper _mapper;
        private readonly ILogger<ProductFeature> _logger;
        public ProductFeatureService(IProductFeatureRepository productRepository, IMapper mapper, ILogger<ProductFeature> logger)
        {
            _repository = productRepository ?? throw new ArgumentNullException(nameof(productRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
        public async Task<CreateResponse> Create(ProductFeatureCreateDTO entity)
        {
            await _repository.CreateAsync(_mapper.Map<ProductFeature>(entity));
            _logger.LogInformation("Product feature created successfully.");
            return new CreateResponse
            {
                StatusCode = 200,
                Message = "Product feature created successfully."
            };
        }
    }
}
