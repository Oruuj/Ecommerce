using Microsoft.AspNetCore.Mvc;
using Service.DTOs.ProductFeatureDTOs;
using Service.Services.Interfaces;

namespace Ecommerce_API.Controllers.Admin
{
    public class ProductFeatureController : AdminController
    {
        private readonly IProductFeatureService _productFeatureService;
        public ProductFeatureController(IProductFeatureService productFeatureService)
        {
            _productFeatureService = productFeatureService;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] ProductFeatureCreateDTO entity) => Ok(await _productFeatureService.Create(entity));
        [HttpPost]
        public async Task<IActionResult> Update([FromForm] ProductFeatureUpdateDTO entity) => Ok(await _productFeatureService.UpdateAsync(entity));
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) => Ok(await _productFeatureService.DeleteAsync(id));
    }
}
