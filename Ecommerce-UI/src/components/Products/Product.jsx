import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, title, image, price, oldPrice }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product flex flex-col justify-evenly items-center border p-4 rounded-lg"
      onClick={() => navigate(`/Detail=${id}`)}
    >
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="content flex flex-col justify-evenly items-center text-center">
        <p className="title">{title}</p>
        <div className="price">
          <span className="line-through text-gray-500 text-sm font-semibold mr-2">
            ${oldPrice}
          </span>
          <span className="text-xl font-bold">${price}</span>
        </div>
        <button className="btn mt-4">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
