using Service.DTOs.ProductDiscountDTOs;
using Service.DTOs.ProductDTOs;
using Service.Helpers.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IProductDiscountService
    {
        Task<CreateResponse> CreateAsync(ProductDiscountCreateDTO entity);
        Task<CreateResponse> UpdateAsync(ProductDiscountUpateDTO entity);
        Task<CreateResponse> DeleteAsync(int id);
        Task<IEnumerable<ProductDiscountDTO>> GetAllAsync();
        Task<ProductDiscountDTO> GetByProductIdAsync(int id);
    }
}
