import React from 'react'
import './HomePage.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/footer';
import MainBanner from '../components/Banners/MainBanner';
import Category from '../components/Category/Category';
import Banners from '../components/Banners/Banners';
import Products from '../components/Products/Products';

const HomePage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MainBanner />
        <Category />
        <Products />
        <Banners />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default HomePage