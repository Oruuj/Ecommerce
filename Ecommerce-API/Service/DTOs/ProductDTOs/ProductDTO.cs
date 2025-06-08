using System.Collections.Generic;
using Service.DTOs.ProductFeature;
using Service.DTOs.ProductImageDTOs;
using Service.DTOs.ProductDiscountDTOs;

namespace Service.DTOs.ProductDTOs
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public List<ProductFeatureDTO> Features { get; set; }
        public List<ProductImageDTO> Images { get; set; }
        public List<ProductDiscountDTO> Discounts { get; set; }
    }
}
