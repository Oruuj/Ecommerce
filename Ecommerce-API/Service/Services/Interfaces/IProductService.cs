using Domain.Entities;
using Service.DTOs.ProductDTOs;
using Service.Helpers.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IProductService
    {
        Task<CreateResponse> CreateAsync(ProductCreateDTO entity);
        Task<CreateResponse> UpdateAsync(ProductUpdateDTO entity);
        Task DeleteAsync(int id);
        Task<IEnumerable<ProductDTO>> GetAllAsync();
        Task<ProductDTO> GetByIdAsync(int id);
        Task<IEnumerable<ProductDTO>> FindByConditionAsync(Expression<Func<Product, bool>> predicate);
    }
}
