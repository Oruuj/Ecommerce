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
    public class ProductImageRepository : BaseRepository<ProductImage>, IProductImageRepository
    {
        private readonly AppDbContext _context;
        public ProductImageRepository(AppDbContext dbContext) : base(dbContext)
        {
            _context = dbContext;
        }
        public async Task DeleteByProductIdAsync(int productId)
        {
            var images = await _context.ProductImages.Where(mbox => mbox.ProductId == productId).ToListAsync();
            if (images.Any())
            {
                _context.ProductImages.RemoveRange(images);
                await _context.SaveChangesAsync();
            }
        }
    }
}
