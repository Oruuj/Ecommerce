import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Wishlist from './pages/wishlist/Wishlist';
import Account from './pages/Account/Account';

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
