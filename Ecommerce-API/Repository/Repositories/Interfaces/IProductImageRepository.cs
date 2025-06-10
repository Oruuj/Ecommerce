using Domain.Entities;

namespace Repository.Repositories.Interfaces
{
    public interface IProductImageRepository : IBaseRepository<ProductImage>
    {
        Task DeleteByProductIdAsync(int productId);
    }
}
