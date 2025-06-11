using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories.Interfaces
{
    public interface IProductDiscountRepository : IBaseRepository<ProductDiscount>
    {
        Task DeleteByProductIdAsync(int productId);
        Task<ProductDiscount> GetByProductIdAsync(int productId);
    }
}
