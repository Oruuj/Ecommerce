import React, { useState } from 'react';
import './Header.scss';
import { CiHeart } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ page }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuUser, setmenuUser] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="header-container flex items-center justify-between p-4 bg-white">
          <div className="logo cursor-pointer" onClick={() => navigate("/")}>
            <h4 className="text-4xl">cyber</h4>
          </div>

          <div className="search hidden xl:flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded-md"
            />
            <IoSearchOutline className="search-icon ml-2 text-2xl" />
          </div>

          <div className="links gap-6 text-lg hidden xl:flex">
            {page === "Home" ? (
              <>
                <a href="/" className="active">Home</a>
                <a href="/Shop">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
              </>
            ) : page === "Shop" ? (
              <>
                <a href="/">Home</a>
                <a href="/Shop" className="active">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
              </>
            ) : (
              <>
                <a href="/">Home</a>
                <a href="/Shop">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
              </>
            )}
          </div>

          <div className="menu flex xl:hidden" onClick={() => setMenuOpen(true)}>
            <MdOutlineMenu className="menu-icon text-3xl" />
          </div>

          <div className="icons items-center gap-4 text-2xl ml-6 hidden xl:flex">
            <CiHeart className="cursor-pointer" onClick={() => navigate("/wishlist")} />
            <RiShoppingCart2Line className="cursor-pointer" onClick={() => navigate("/ShoppingCart")} />
            <FiUser className="cursor-pointer" onClick={() => setmenuUser(prev => !prev)} />
          </div>
          <AnimatePresence>
            {menuUser && (
              <motion.div className="user-menu absolute bg-white border rounded-md shadow-md p-4 z-50"

                initial={{ x: 1000, y: 40, opacity: 0 }}
                animate={{ x: 1000, y: 50, opacity: 1 }}
                exit={{ x: 1000, y: 40, opacity: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <a href='/account' className="block cursor-pointer mb-2">Login or register</a>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="header-menu xl:hidden"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <IoMdClose className="text-3xl mb-4 cursor-pointer" onClick={() => setMenuOpen(false)} />
            <div className="links gap-6 text-lg flex flex-col mt-5">
              <div className="links gap-6 text-lg flex flex-col mt-5">
                {page === "Home" ? (
                  <>
                    <a href="/" className="active">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                  </>
                ) : page === "Shop" ? (
                  <>
                    <a href="/">Home</a>
                    <a href="/Shop" className="active">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                  </>
                ) : (
                  <>
                    <a href="/">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                  </>
                )}
              </div>
            </div>
            <div className="icons-mobile flex gap-4 text-2xl mt-auto">
              <CiHeart className="cursor-pointer" onClick={() => navigate("/wishlist")} />
              <RiShoppingCart2Line className="cursor-pointer" onClick={() => navigate("/ShoppingCart")} />
              <FiUser className="cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header
