import React from 'react'
import img from '../../assets/Iphone.png';
import './Discount.scss';
const Discount = () => {
    return (
        <div className='discount-area'>
            <div className="discount-container">
                <div className="title">
                    <span className='text-2xl font-semibold'>Discounts up to -50%</span>
                </div>
                <div className="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-6 items-center">
                    <div className="product flex flex-col justify-evenly items-center border p-4 rounded-lg">
                        <div className="img">
                            <img src={img} />
                        </div>
                        <div className="content flex flex-col justify-evenly items-center text-center">
                            <p className='title'>Samsung Galaxy S23 Ultra</p>
                            <div className="price">
                                <span className='line-through text-gray-500 text-sm font-semibold mr-2'>180</span>
                                <span className='text-xl font-bold'>$90</span>
                            </div>
                            <button className='btn mt-4'>Buy Now</button>
                        </div>
                    </div>
                    <div className="product flex flex-col justify-evenly items-center border p-4 rounded-lg">
                        <div className="img">
                            <img src={img} />
                        </div>
                        <div className="content flex flex-col justify-evenly items-center text-center">
                            <p className='title'>Samsung Galaxy S23 Ultra</p>
                            <div className="price">
                                <span className='line-through text-gray-500 text-sm font-semibold mr-2'>180</span>
                                <span className='text-xl font-bold'>$90</span>
                            </div>
                            <button className='btn mt-4'>Buy Now</button>
                        </div>
                    </div>
                    <div className="product flex flex-col justify-evenly items-center border p-4 rounded-lg">
                        <div className="img">
                            <img src={img} />
                        </div>
                        <div className="content flex flex-col justify-evenly items-center text-center">
                            <p className='title'>Samsung Galaxy S23 Ultra</p>
                            <div className="price">
                                <span className='line-through text-gray-500 text-sm font-semibold mr-2'>180</span>
                                <span className='text-xl font-bold'>$90</span>
                            </div>
                            <button className='btn mt-4'>Buy Now</button>
                        </div>
                    </div>
                    <div className="product flex flex-col justify-evenly items-center border p-4 rounded-lg">
                        <div className="img">
                            <img src={img} />
                        </div>
                        <div className="content flex flex-col justify-evenly items-center text-center">
                            <p className='title'>Samsung Galaxy S23 Ultra</p>
                            <div className="price">
                                <span className='line-through text-gray-500 text-sm font-semibold mr-2'>180</span>
                                <span className='text-xl font-bold'>$90</span>
                            </div>
                            <button className='btn mt-4'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount