using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.ProductImageDTOs
{
    public class ProductImageDTO
    {
        public int Id { get; set; }
        public bool MainImage { get; set; }
        public string Image { get; set; }
        public int ProductId { get; set; }
    }
}
