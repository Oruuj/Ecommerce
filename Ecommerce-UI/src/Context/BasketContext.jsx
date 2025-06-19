import React, { createContext, useContext, useState } from 'react';
import axios from '../api/axios';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(null);

  const fetchBasket = async (buyerId) => {
    const response = await axios.get(`/api/basket/${buyerId}`);
    setBasket(response.data);
  };

  const addItem = async (buyerId, product) => {
    await axios.post(`/api/basket/${buyerId}`, product);
    fetchBasket(buyerId);
  };

  const removeItem = async (buyerId, productId) => {
    await axios.delete(`/api/basket/${buyerId}/${productId}`);
    fetchBasket(buyerId);
  };

  return (
    <BasketContext.Provider value={{ basket, fetchBasket, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
