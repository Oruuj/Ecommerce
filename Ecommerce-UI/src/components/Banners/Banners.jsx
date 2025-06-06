import React from 'react'
import wacth from '../../assets/banners-1.png';
import './Banners.scss';
import banner2 from '../../assets/banners-2.png';
import banner3 from '../../assets/banners-3.png';
import banner4 from '../../assets/banners-4.png';

const Banners = () => {
    return (
        <div className="banner-area flex items-center justify-center">
            <div className="banners banners-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                <div className="banner">
                    <div className="img">
                        <img src={wacth} />
                    </div>
                    <div className="content">
                        <p className='title font-semibold text-2xl'>Popular Products</p>
                        <span className='desc'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</span>
                    </div>
                    <button className='btn'>Shop Now</button>
                </div>
                <div className="banner" style={{ backgroundColor: "#f9f9f9" }}>
                    <div className="img">
                        <img src={banner2} />
                    </div>
                    <div className="content">
                        <p className='title font-semibold text-2xl'>Popular Products</p>
                        <span className='desc'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</span>
                    </div>
                    <button className='btn'>Shop Now</button>
                </div>
                <div className="banner" style={{ backgroundColor: "#EAEAEA" }}>
                    <div className="img">
                        <img src={banner3} />
                    </div>
                    <div className="content">
                        <p className='title font-semibold text-2xl'>Popular Products</p>
                        <span className='desc'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</span>
                    </div>
                    <button className='btn'>Shop Now</button>
                </div>
                <div className="banner" style={{ backgroundColor: "#2C2C2C", color: "white" }}>
                    <div className="img">
                        <img src={banner4} />
                    </div>
                    <div className="content">
                        <p className='title font-semibold text-2xl' style={{ color: "white" }}>Popular Products</p>
                        <span className='desc'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</span>
                    </div>
                    <button className='btn'>Shop Now</button>
                </div>
            </div>
        </div >
    )
}

export default Banners