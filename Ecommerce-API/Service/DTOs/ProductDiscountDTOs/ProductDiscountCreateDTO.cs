using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.ProductDiscountDTOs
{
    public class ProductDiscountCreateDTO
    {
        public int ProductId { get; set; }
        public int DiscountId { get; set; }
    }
}
