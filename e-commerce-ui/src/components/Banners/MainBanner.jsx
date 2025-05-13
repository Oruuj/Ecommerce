import React from 'react'
import './MainBanner.scss';
import image from "../../assets/Group-2.png";

const MainBanner = () => {
    return (
        <div className='Banner'>
            <div className="container flex flex-col justify-around items-center">
                <div className="Content flex flex-col gap-5 ">
                    <p className='Title text-6xl'>IPhone 14 Pro</p>
                    <span className='desc'>Created to change everything for the better. For everyone</span>
                    <button className='btn'>Shop Now</button>
                </div>
                <div className="image">
                    <img src={image} />
                </div>
            </div>
        </div>
    )
}

export default MainBanner