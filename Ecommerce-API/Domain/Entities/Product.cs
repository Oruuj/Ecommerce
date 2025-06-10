using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public ICollection<ProductFeature> Features { get; set; }
        public ICollection<ProductDiscount> ProductDiscounts { get; set; }
        public ICollection<ProductImage> ProductImages { get; set; }
        public int ProductTypeId { get; set; } 
        public ProductType ProductType { get; set; }
    }
}
