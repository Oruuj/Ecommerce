import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import img from '../../assets/a.png';
import './wishlist.scss';

const Wishlist = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="wishlist">
                    <div className="wishlist-container">
                        <div className="items flex flex-col items-center gap-5">
                            <div className="item flex items-center justify-between ">
                                <div className="img">
                                    <img src={img} />
                                </div>
                                <div className="title">
                                    Apple iPhone 14 Pro Max
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <div className="btns">
                                    <button className='remove-btn'>Remove</button>
                                    <button className='btn'>Add to Cart</button>
                                </div>
                            </div>
                            <div className="item flex items-center justify-between ">
                                <div className="img">
                                    <img src={img} />
                                </div>
                                <div className="title">
                                    Apple iPhone 14 Pro Max
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <div className="btns">
                                    <button className='remove-btn'>Remove</button>
                                    <button className='btn'>Add to Cart</button>
                                </div>
                            </div>
                            <div className="item flex items-center justify-between ">
                                <div className="img">
                                    <img src={img} />
                                </div>
                                <div className="title">
                                    Apple iPhone 14 Pro Max
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <div className="btns">
                                    <button className='remove-btn'>Remove</button>
                                    <button className='btn'>Add to Cart</button>
                                </div>
                            </div>
                            <div className="item flex items-center justify-between ">
                                <div className="img">
                                    <img src={img} />
                                </div>
                                <div className="title">
                                    Apple iPhone 14 Pro Max
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <div className="btns">
                                    <button className='remove-btn'>Remove</button>
                                    <button className='btn'>Add to Cart</button>
                                </div>
                            </div>
                            <div className="item flex items-center justify-between ">
                                <div className="img">
                                    <img src={img} />
                                </div>
                                <div className="title">
                                    Apple iPhone 14 Pro Max
                                </div>
                                <div className="price">
                                    <span className='line-through text-gray-500 text-sm font-semibold mr-2'>$999</span>
                                    <span className='text-xl font-bold'>$949</span>
                                </div>
                                <div className="btns">
                                    <button className='remove-btn'>Remove</button>
                                    <button className='btn'>Add to Cart</button>
                                </div>
                            </div>
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

export default Wishlist