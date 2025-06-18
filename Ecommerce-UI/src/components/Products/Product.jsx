import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./Product.scss";

const Product = ({ id, title, image, price }) => {
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const response = await axios.get(`/api/Discount/Admin/GetAllDiscountByProduct/${id}`);
        if (response.data.length > 0) {
          console.log(response.data);
          setDiscount(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching discount:", error);
      }
    };

    fetchDiscount();
  }, [id]);

  const discountedPrice = discount ? (price - (price * discount.discountPercentage) / 100) : price;

  return (
    <div
      className="product relative flex flex-col justify-evenly items-center border p-4 rounded-lg"
      onClick={() => navigate(`/Detail?id=${id}`)}
    >
      {discount && (
        <div className="discount-badge absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{discount.discountPercentage}% OFF
        </div>
      )}

      <div className="img">
        <img src={`https://localhost:7279/${image}`} alt={title} />
      </div>

      <div className="content flex flex-col justify-evenly items-center text-center mt-2">
        <p className="title font-medium">{title}</p>
        <div className="price">
          {discount ? (
            <>
              <span className="line-through text-gray-500 text-sm font-semibold mr-2">
                ${price}
              </span>
              <span className="text-xl font-bold">${discountedPrice}</span>
            </>
          ) : (
            <span className="text-xl font-bold">${price}</span>
          )}
        </div>
        <button className="btn mt-4">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
