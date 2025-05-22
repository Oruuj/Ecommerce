import React from 'react';
import img from '../../assets/Banner-2.png';
import './Banner2.scss';

const Banner2 = () => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${img})` }} >
            <div className="content items-center gap-9">
                <div className="text">
                    <span className='title font-semibold mb-4'>Big Summer Sale</span>
                    <span className='desc '>Commodo fames vitae vitae leo mauris in. Eu consequat.</span>
                </div>
                <button className='btn'>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner2;
