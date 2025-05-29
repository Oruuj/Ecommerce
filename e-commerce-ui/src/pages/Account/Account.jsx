import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import './Account.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Account = () => {
    const [isLogin, SetisLogin] = useState(true);

    const [isMobile, setIsMobile] = useState(false);
    const [isMobileSmall, setIsMobileSmall] = useState(true);
    const [isMobileSmallByWidthHeight, setIsMobileSmallByWidthHeight] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            setIsMobileSmall(window.innerWidth < 768);
            setIsMobileSmallByWidthHeight(window.innerWidth < 768 && window.innerHeight < 690);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="account">
                    <div className="account-container">
                        <AnimatePresence>
                            {isLogin ? (
                                <motion.div className="title reg absolute"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{
                                        x: isMobileSmall ? -15 : isMobile ? 30 : 0,
                                        y: isMobileSmallByWidthHeight ? 287 : isMobileSmall ? 475 : 0,
                                        opacity: 1
                                    }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ type: "tween", duration: 0.6 }}
                                >
                                    <span>Haven't registered yet?</span>
                                    <button onClick={() => SetisLogin(false)}>Register</button>
                                </motion.div>
                            ) : (
                                <motion.div className="title login absolute"
                                    initial={{ x: isMobileSmall ? 0 : isMobile ? -300 : -350, opacity: 0 }}
                                    animate={{ x: isMobileSmall ? 165 : isMobile ? -90 : -480, y: isMobileSmallByWidthHeight ? -42 : 0, opacity: 1 }}
                                    exit={{ x: -400, opacity: 0 }}
                                    transition={{ type: "tween", duration: 0.6 }}
                                >
                                    <span>Already have an account?</span>
                                    <button onClick={() => SetisLogin(true)}>Login</button>
                                </motion.div>
                            )}
                            {isLogin ? (
                                <motion.div className="login"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "tween", duration: 1 }}
                                >
                                    <h2 className='text-2xl font-semibold mb-10'>Login</h2>
                                    <form className='flex flex-col'>
                                        <input type="email" placeholder="Email" required />
                                        <input type="password" placeholder="Password" required />
                                        <button type="submit">Login</button>
                                    </form>
                                </motion.div>) : (
                                <div className="login bg-black">

                                </div>)}

                            {isLogin ? (
                                <div className="register bg-black">

                                </div>
                            ) : (
                                <motion.div className="register"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "tween", duration: 1 }}
                                >
                                    <h2 className='text-2xl font-semibold mb-10'>Register</h2>
                                    <form className='flex flex-col'>
                                        <input type="text" placeholder="Full Name" required />
                                        <input type="email" placeholder="Email" required />
                                        <input type="password" placeholder="Password" required />
                                        <input type="password" placeholder="Confirm Password" required />
                                        <button type="submit">Register</button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Account