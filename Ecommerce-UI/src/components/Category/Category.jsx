import React, { useRef } from 'react';
import './Category.scss';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import phone from '../../assets/phones.png';
import { motion, AnimatePresence } from 'framer-motion';

const Category = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollBy({ left: -800, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: 800, behavior: 'smooth' });
        }
    };
    return (
        <div className='category'>
            <div className="category-container mt-5">
                <div className="title-area flex justify-between  mb-6">
                    <span className='title text-2xl font-semibold'>Browse By Category</span>
                    <div className="arrows flex gap-2 text-2xl">
                        <IoIosArrowBack className='arrow' onClick={() => scroll('left')} />
                        <IoIosArrowForward className='arrow' onClick={() => scroll('right')} />
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div className="categories-wrapper" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} transition={{ type: "tween", duration: 0.3 }} ref={scrollRef}>
                        <div className="categories grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>

                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>

                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>
                            <motion.div
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={phone} />
                                <span>Phones</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Category