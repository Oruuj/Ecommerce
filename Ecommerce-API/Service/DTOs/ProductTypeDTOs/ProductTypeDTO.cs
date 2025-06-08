using Domain.Entities;
using Service.DTOs.ProductDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.ProductTypeDTOs
{
    public class ProductTypeDTO
    {
        public string Name { get; set; } = string.Empty;
        public ICollection<ProductDTO> Products { get; set; }
    }
}
