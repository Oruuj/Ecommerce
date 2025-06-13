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
    public class ProductFeatureRepository : BaseRepository<ProductFeature>, IProductFeatureRepository
    {
        private readonly AppDbContext _context;
    public ProductFeatureRepository(AppDbContext dbContext) : base(dbContext)
    {
        _context = dbContext;
    }
}
}
