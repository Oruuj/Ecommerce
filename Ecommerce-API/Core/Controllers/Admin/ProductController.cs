using Microsoft.AspNetCore.Mvc;
using Service.DTOs.ProductDTOs;
using Service.Services.Interfaces;

namespace Core.Controllers.Admin
{
    public class ProductController : AdminBaseController
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] int Id)
        {
            await _productService.DeleteAsync(Id);
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] ProductCreateDTO entity)
        {
            await _productService.CreateAsync(entity);
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromForm] ProductUpdateDTO entity)
        {
            await _productService.UpdateAsync(entity);
            return Ok();
        }
    }
}
