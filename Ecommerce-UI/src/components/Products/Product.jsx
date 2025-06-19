import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./Product.scss";
import { useBasket } from '../../Context/BasketContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Product = ({ id, title, image, price }) => {
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(null);
  const { addItem } = useBasket();

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const res = await axios.get(`/api/Discount/Admin/GetAllDiscountByProduct/${id}`);
        if (res.data.length > 0) {
          setDiscount(res.data[0]);
        } else {
          setDiscount(null);
        }
      } catch (error) {
        console.error("Error fetching discount:", error);
      }
    };

    fetchDiscount();
  }, [id]);

  const discountedPrice = discount
    ? parseFloat((price - (price * discount.discountPercentage) / 100).toFixed(2))
    : null;

  const handleAddToBasket = async () => {
    try {
      const buyerId = localStorage.getItem("userid");
      if (!buyerId) {
        toast.error("Please log in to add items to your basket.");
        return;
      }

      const product = {
        productId: id,
        productName: title,
        price: price,
        discountedPrice: discountedPrice,
        quantity: 1,
        image: image
      };

      await addItem(buyerId, product);
      toast.success("Item added to basket!");
    } catch (err) {
      toast.error("Failed to add item.");
      console.error(err);
    }
  };

  return (
    <div className="product relative flex flex-col justify-evenly items-center border p-4 rounded-lg">
      {discount && (
        <div className="discount-badge absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{discount.discountPercentage}% OFF
        </div>
      )}

      <div className="img cursor-pointer" onClick={() => navigate(`/Detail?id=${id}`)}>
        <img src={`https://localhost:7279/${image}`} alt={title} />
      </div>

      <div className="content flex flex-col justify-evenly items-center text-center mt-2">
        <p className="title font-medium cursor-pointer" onClick={() => navigate(`/Detail?id=${id}`)}>{title}</p>
        <div className="price">
          {discount ? (
            <>
              <span className="line-through text-gray-500 text-sm font-semibold mr-2">
                ${price.toFixed(2)}
              </span>
              <span className="text-xl font-bold">${discountedPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-xl font-bold">${price.toFixed(2)}</span>
          )}
        </div>
        <div className="btns flex items-center justify-center gap-2">
          <button className="cart mt-4" onClick={handleAddToBasket}>
            Add To Cart
          </button>
          <button className="btn mt-4">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
