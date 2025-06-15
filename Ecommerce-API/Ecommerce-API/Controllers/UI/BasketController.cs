using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_API.Controllers.UI
{
    public class BasketController : UIController
    {
        private static readonly Dictionary<string, Basket> Baskets = new();

        [HttpGet("{buyerId}")]
        public ActionResult<Basket> GetBasket(string buyerId)
        {
            if (Baskets.TryGetValue(buyerId, out var basket))
                return Ok(basket);

            return NotFound();
        }

        [HttpPost]
        public ActionResult<Basket> AddItem(string buyerId, BasketItem item)
        {
            if (!Baskets.TryGetValue(buyerId, out var basket))
            {
                basket = new Basket { BuyerId = buyerId };
                Baskets[buyerId] = basket;
            }

            var existing = basket.Items.FirstOrDefault(x => x.Id == item.Id);
            if (existing != null)
                existing.Id += item.Id;
            else
                basket.Items.Add(item);

            return Ok(basket);
        }

        [HttpDelete("{buyerId}/items/{productId}")]
        public ActionResult<Basket> RemoveItem(string buyerId, int productId)
        {
            if (!Baskets.TryGetValue(buyerId, out var basket))
                return NotFound();

            var item = basket.Items.FirstOrDefault(x => x.Id == productId);
            if (item != null)
                basket.Items.Remove(item);

            return Ok(basket);
        }
    }
}
