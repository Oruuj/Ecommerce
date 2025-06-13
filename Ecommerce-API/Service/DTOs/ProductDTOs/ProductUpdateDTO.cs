using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.ProductDTOs
{
    public class ProductUpdateDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Brand { get; set; }
        public int StockQuantity { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public ICollection<ProductFeature> ProductFeatures { get; set; }
        public ICollection<DiscountProduct> DiscountProducts { get; set; }
        public ICollection<ProductImage> ProductImages { get; set; }
    }
}
