import React from 'react';
import './Header.scss'
import { CiHeart } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className="header ">
      <div className="header-container flex items-center justify-between p-4 white">
        <div className="logo">
          <h4 className='text-4xl'>cyber</h4>
        </div>

        <div className="search hidden xl:flex">
          <input type="text" placeholder="Search" className="w-full p-2 border rounded-md " />
          <IoSearchOutline className='search-icon' />
        </div>

        <div className="links gap-6 text-lg hidden xl:flex">
          <a href="/" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </div>
        <div className="menu flex xl:hidden">
          <MdOutlineMenu className='menu-icon' />
        </div>

        <div className="icons items-center gap-4 text-2xl ml-6 hidden xl:flex">
          <CiHeart className="cursor-pointer" />
          <RiShoppingCart2Line className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

export default Header;
