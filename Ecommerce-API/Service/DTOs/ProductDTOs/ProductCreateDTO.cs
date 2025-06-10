using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Service.DTOs.ProductDiscountDTOs;
using Service.DTOs.ProductFeature;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.ProductDTOs
{
    public class ProductCreateDTO
    {
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public List<ProductFeatureDTO> Features { get; set; }
        public List<ProductDiscountDTO> ProductDiscounts { get; set; }
        public List<IFormFile> Images { get; set; }
        public int ProductTypeId { get; set; }
    }
}
