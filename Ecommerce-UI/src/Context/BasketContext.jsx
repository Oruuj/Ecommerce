import { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(null);

  const fetchBasket = async (buyerId) => {
    const res = await fetch(`/api/basket/${buyerId}`);
    if (res.ok) setBasket(await res.json());
  };

  const addItem = async (buyerId, product) => {
    const res = await fetch(`/api/basket?buyerId=${buyerId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    if (res.ok) setBasket(await res.json());
  };

  return (
    <BasketContext.Provider value={{ basket, fetchBasket, addItem }}>
      {children}
    </BasketContext.Provider>
  );
};