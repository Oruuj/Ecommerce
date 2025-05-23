import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import './Account.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Account = () => {
    const [isLogin, SetisLogin] = useState(true);
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
                                <motion.div className="title absolute"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ type: "tween", duration: 0.6 }}
                                >
                                    <span>Haven't registered yet?</span>
                                    <button onClick={() => SetisLogin(false)}>Register</button>
                                </motion.div>
                            ) : (
                                <motion.div className="title absolute"
                                    initial={{ x: -400, opacity: 0 }}
                                    animate={{ x: -525, opacity: 1 }}
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