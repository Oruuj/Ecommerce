import React from 'react'
import img from '../../assets/a.png';
import { MdCancel } from "react-icons/md";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import './ShoppingCart.scss';
const ShoppingCard = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className='cart-container'>
                    <div className="title text-2xl font-semibold">
                        <span>Shopping Cart</span>
                    </div>
                    <div className="content">
                        <div className="items flex flex-col items-center justify-start gap-4">
                            <div className="item flex items-center justify-between mt-5 mb-5">
                                <img src={img} />
                                <div className="text">
                                    <span>Apple iPhone 14 Pro Max</span>
                                </div>
                                <div className="counter">
                                    <span>-</span>
                                    <span className='count'>1</span>
                                    <span>+</span>
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <MdCancel />
                            </div>
                            <div className="item flex items-center justify-between mt-5 mb-5">
                                <img src={img} />
                                <div className="text">
                                    <span>Apple iPhone 14 Pro Max</span>
                                </div>
                                <div className="counter">
                                    <span>-</span>
                                    <span className='count'>1</span>
                                    <span>+</span>
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <MdCancel />
                            </div>
                            <div className="item flex items-center justify-between mt-5 mb-5">
                                <img src={img} />
                                <div className="text">
                                    <span>Apple iPhone 14 Pro Max</span>
                                </div>
                                <div className="counter">
                                    <span>-</span>
                                    <span className='count'>1</span>
                                    <span>+</span>
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <MdCancel />
                            </div>
                        </div>
                        <div className="order-summary">
                            <div className="title font-semibold text-3xl">
                                Order Summary
                            </div>
                            <div className="inputs">
                                <div className="input">
                                    <span>Discount code / Promo code</span>
                                    <input type="text" placeholder='Code' />
                                </div>
                            </div>
                            <div className="desc">
                                <div className="Subtotat flex justify-between">
                                    <span>Subtotal</span>
                                    <span>$999</span>
                                </div>
                                <div className="discounts flex justify-between">
                                    <span>Discounted</span>
                                    <span>$ 50</span>
                                </div>
                                <div className="total flex justify-between">
                                    <span>Total</span>
                                    <span>$949</span>
                                </div>
                            </div>
                            <button className='btn mt-5'>Checkout</button>
                        </div>

                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default ShoppingCard