using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repository.Data;
using Repository.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class ProductDiscountRepository : BaseRepository<ProductDiscount>, IProductDiscountRepository
    {
        private readonly AppDbContext _context;
        public ProductDiscountRepository(AppDbContext dbContext) : base(dbContext)
        {
            _context = dbContext;
        }
        public async Task DeleteByProductIdAsync(int productId)
        {
            var discounts = await _context.ProductDiscounts.Where(mbox => mbox.ProductId == productId).ToListAsync();
            if (discounts.Any())
            {
                _context.ProductDiscounts.RemoveRange(discounts);
                await _context.SaveChangesAsync();
            }
        }
    }
}
