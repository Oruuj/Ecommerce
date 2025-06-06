import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Products.scss";
import img from "../../assets/Iphone.png";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const productData = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    price: 80,
    oldPrice: 100,
    image: img,
    category: "new",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    price: 90,
    oldPrice: 110,
    image: img,
    category: "best",
  },
  {
    id: 3,
    title: "OnePlus 12 Pro",
    price: 85,
    oldPrice: 105,
    image: img,
    category: "featured",
  },
  {
    id: 4,
    title: "Google Pixel 8",
    price: 78,
    oldPrice: 95,
    image: img,
    category: "best",
  },
];

const tabMap = ["new", "best", "featured"];

const Products = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedCategory = tabMap[value];
  const filteredProducts = productData.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="product-area">
      <div className="product-container">
        <div className="title">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTab-root": { color: "gray", fontWeight: "semibold" },
                "& .Mui-selected": { color: "black !important" },
                "& .MuiTabs-indicator": { backgroundColor: "black" },
              }}
            >
              <Tab label="New Arrival" disableRipple />
              <Tab label="Best Seller" disableRipple />
              <Tab label="Featured Products" disableRipple />
            </Tabs>
          </Box>
        </div>
        <div className="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-6 items-center">
          {filteredProducts.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
