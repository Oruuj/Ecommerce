import React, { useState, useRef, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import './ShopSideBar.scss';

const ShopSideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const contentRef = useRef(null);
    const [height, setHeight] = useState();

    const toggleOpen = () => {
        setIsOpen(m => !m);
    };

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className='Features'>

            <div className="feature mb-5">
                <div className="title flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
                    <span>Brand</span>
                    <div className="icons flex">
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                <hr className='mb-5' />

                <div className="values-wrapper" style={{ height: height, overflow: 'hidden', transition: 'height 0.3s ease' }} ref={contentRef}>
                    <div className="values">
                        <div className="search hidden xl:flex items-center mb-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 border rounded-md"
                            />
                            <IoSearchOutline className="search-icon ml-2 text-2xl" />
                        </div>
                        <div className="checkboxes">
                            <div>
                                <input type="checkbox" value="Apple" id="apple1" />
                                <label htmlFor="apple1"> Apple</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Samsung" id="samsung1" />
                                <label htmlFor="samsung1"> Samsung</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Sony" id="sony1" />
                                <label htmlFor="sony1"> Sony</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature mb-5">
                <div className="title flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
                    <span>Brand</span>
                    <div className="icons flex">
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                <hr className='mb-5' />

                <div className="values-wrapper" style={{ height: height, overflow: 'hidden', transition: 'height 0.3s ease' }} ref={contentRef}>
                    <div className="values">
                        <div className="search hidden xl:flex items-center mb-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 border rounded-md"
                            />
                            <IoSearchOutline className="search-icon ml-2 text-2xl" />
                        </div>
                        <div className="checkboxes">
                            <div>
                                <input type="checkbox" value="Apple" id="apple1" />
                                <label htmlFor="apple1"> Apple</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Samsung" id="samsung1" />
                                <label htmlFor="samsung1"> Samsung</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Sony" id="sony1" />
                                <label htmlFor="sony1"> Sony</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature mb-5">
                <div className="title flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
                    <span>Brand</span>
                    <div className="icons flex">
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                <hr className='mb-5' />

                <div className="values-wrapper" style={{ height: height, overflow: 'hidden', transition: 'height 0.3s ease' }} ref={contentRef}>
                    <div className="values">
                        <div className="search hidden xl:flex items-center mb-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 border rounded-md"
                            />
                            <IoSearchOutline className="search-icon ml-2 text-2xl" />
                        </div>
                        <div className="checkboxes">
                            <div>
                                <input type="checkbox" name="Apple" value="Apple" id="apple1" />
                                <label htmlFor="apple1"> Apple</label>
                            </div>
                            <div>
                                <input type="checkbox" name="Samsung" value="Samsung" id="samsung1" />
                                <label htmlFor="samsung1"> Samsung</label>
                            </div>
                            <div>
                                <input type="checkbox" name="Sony" value="Sony" id="sony1" />
                                <label htmlFor="sony1"> Sony</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature mb-5">
                <div className="title flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
                    <span>Brand</span>
                    <div className="icons flex">
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                <hr className='mb-5' />

                <div className="values-wrapper" style={{ height: height, overflow: 'hidden', transition: 'height 0.3s ease' }} ref={contentRef}>
                    <div className="values">
                        <div className="search hidden xl:flex items-center mb-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 border rounded-md"
                            />
                            <IoSearchOutline className="search-icon ml-2 text-2xl" />
                        </div>
                        <div className="checkboxes">
                            <div>
                                <input type="checkbox" value="Apple" id="apple1" />
                                <label htmlFor="apple1"> Apple</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Samsung" id="samsung1" />
                                <label htmlFor="samsung1"> Samsung</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Sony" id="sony1" />
                                <label htmlFor="sony1"> Sony</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ShopSideBar;
