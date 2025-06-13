using Microsoft.AspNetCore.Mvc;
using Service.DTOs.ProductDTOs;
using Service.Services.Interfaces;

namespace Ecommerce_API.Controllers.Admin
{
    public class ProductController : AdminController
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService ?? throw new ArgumentNullException(nameof(productService));
        }
        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromForm] ProductCreateDTO entity)
        {
            if (entity == null)
            {
                return BadRequest("Product data is null.");
            }
            var response = await _productService.CreateAsync(entity);
            if (response.StatusCode == 400)
            {
                return BadRequest(response.Message);
            }
            return Ok(response);
        }
    }
}
