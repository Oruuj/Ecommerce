using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace Ecommerce_API.Controllers.UI
{
    public class BasketController : UIController
    {
        private static readonly Dictionary<string, Basket> Baskets = new();
        private readonly IDiscountService _discountService;
        public BasketController(IDiscountService discountService)
        {
            _discountService = discountService;
        }

        [HttpGet("{buyerId}")]
        public ActionResult<Basket> GetBasket(string buyerId)
        {
            if (Baskets.TryGetValue(buyerId, out var basket))
                return Ok(basket);

            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<Basket>> AddItem(string buyerId, BasketItem item)
        {
            if (!Baskets.TryGetValue(buyerId, out var basket))
            {
                basket = new Basket { BuyerId = buyerId };
                Baskets[buyerId] = basket;
            }

            var discount = await _discountService.GetByProductIdAsync(item.ProductId);
            if (discount != null)
            {
                item.DiscountedPrice = item.Price - (item.Price * discount.DiscountPercentage / 100);
            }
            else
            {
                item.DiscountedPrice = null;
            }

            var existing = basket.Items.FirstOrDefault(x => x.ProductId == item.ProductId);
            if (existing != null)
            {
                existing.Quantity += item.Quantity;
            }
            else
            {
                basket.Items.Add(item);
            }

            return Ok(basket);
        }


        [HttpDelete("{buyerId}/items/{productId}")]
        public ActionResult<Basket> RemoveItem(string buyerId, int productId)
        {
            if (!Baskets.TryGetValue(buyerId, out var basket))
                return NotFound();

            var item = basket.Items.FirstOrDefault(x => x.ProductId == productId);
            if (item != null)
                basket.Items.Remove(item);

            return Ok(basket);
        }
    }
}
