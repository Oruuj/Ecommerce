using Microsoft.AspNetCore.Mvc;
using Service.DTOs.ProductDTOs;
using Service.Services.Interfaces;

namespace Ecommerce_API.Controllers.Admin
{
    public class ProductfeatureController : AdminController
    {
        private readonly IProductFeatureService _productFeatureService;
        public ProductfeatureController(IProductFeatureService productFeatureService)
        {
            _productFeatureService = productFeatureService;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] ProductFeatureCreateDTO entity)
        {
            var response = await _productFeatureService.Create(entity);
            return Ok(response);
        }
    }
}
