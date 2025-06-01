import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import Direction from "../../components/Directory/directory";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { LuMailMinus } from "react-icons/lu";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <header>
        <Header page="contact" />
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.section
            id="direction"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Direction directory={["Home", "Contact"]} />
          </motion.section>
        </AnimatePresence>
        <section id="contact-page">
          <AnimatePresence mode="wait">
            <motion.div
              className="container flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="little-title">How can we help you? </span>
              <span className="title font-semibold text-3xl">Contact us</span>
              <p>
                We’re here to help and answer any questions you might have. We
                look forward to hearing from you!
              </p>
              <div className="contacts flex flex-col justify-between">
                <div className="contact">
                  <MdOutlineLocationOn />
                  <span>Address 123</span>
                </div>
                <div className="contact">
                  <MdOutlinePhone />
                  <span>+45 71 99 77 07</span>
                </div>
                <div className="contact">
                  <LuMailMinus />
                  <span className="mail">mail@cyber.com</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
