using Microsoft.AspNetCore.Mvc;
using Service.Services.Interfaces;

namespace Ecommerce_API.Controllers.UI
{
    public class ProductController : UIController
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _productService.GetAllAsync());
        [HttpGet]
        public async Task<IActionResult> GetById([FromQuery] int Id) => Ok(await _productService.GetByIdAsync(Id));
    }
}
