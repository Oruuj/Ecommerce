using Microsoft.AspNetCore.Http;
using Service.DTOs.ProductDiscountDTOs;
using Service.DTOs.ProductFeature;
using System.Collections.Generic;

namespace Service.DTOs.ProductDTOs
{
    public class ProductUpdateDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public List<ProductFeatureDTO> Features { get; set; }
        public List<ProductDiscountDTO> ProductDiscounts { get; set; }
        public List<IFormFile> Images { get; set; }
    }
}