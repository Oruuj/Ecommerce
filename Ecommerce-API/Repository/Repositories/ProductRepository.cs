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
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        private readonly AppDbContext _context;
        public ProductRepository(AppDbContext dbContext) : base(dbContext)
        {
            _context = dbContext;
        }

        public async Task<Product> GetByIdWithIncludesAsync(int productid)
        {
            return await _context.Products.Include(mbox => mbox.Category).Include(mbox => mbox.ProductImages).Include(mbox => mbox.ProductDiscounts).ThenInclude(mbox => mbox.Discount).FirstOrDefaultAsync(mbox => mbox.Id == productid);
        }
    }
}
