import React from 'react';
import './directory.scss';
import { IoIosArrowForward } from "react-icons/io";

const Directory = ({ directory }) => {
    return (
        <div className='directory'>
            <div className="directory-container flex items-center gap-2">
                {directory.map((element, index) => (
                    <>
                        {index !== 0 && <IoIosArrowForward />}
                        <span>{element}</span>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Directory;
