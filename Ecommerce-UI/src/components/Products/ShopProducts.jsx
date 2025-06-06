import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import "./ShopProducts.scss";
import img from "../../assets/Iphone.png";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const ShopProducts = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 6;
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://api.example.com/products?page=${page}&pageSize=${pageSize}&sort=${sortOption}`
      );
      const data = await res.json();
      setProducts(data.items);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="Container">
      <div className="title flex justify-between">
        <div className="count">
          <span>Selected Products: </span>
          <span>{products.length}</span>
        </div>
        <div className="filter" style={{ maxWidth: 200 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="sort-label">Sort by</InputLabel>
            <Select
              labelId="sort-label"
              id="sort"
              value={sortOption}
              label="Sort by"
              onChange={handleSortChange}
            >
              <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
              <MenuItem value="nameAsc">Name: A-Z</MenuItem>
              <MenuItem value="nameDesc">Name: Z-A</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6 items-center">
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
          />
        ))}
      </div>

      <div className="pagination mt-10 flex justify-center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
};

export default ShopProducts;
