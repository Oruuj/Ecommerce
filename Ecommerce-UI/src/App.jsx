import { useState ,useEffect  } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Wishlist from "./pages/wishlist/Wishlist";
import Account from "./pages/Account/Account";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/contact";
import "./App.css";
import Lenis from "@studio-freight/lenis";
function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 },
  };

  const pageTransition = {
    duration: 0.3,
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/Shop"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <ShopPage />
            </motion.div>
          }
        />
        <Route
          path="/ShoppingCart"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <ShoppingCart />
            </motion.div>
          }
        />
        <Route
          path="/Wishlist"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <Wishlist />
            </motion.div>
          }
        />
        <Route
          path="/account"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <Account />
            </motion.div>
          }
        />
        <Route
          path="/Detail"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <Detail />
            </motion.div>
          }
        />
        <Route
          path="/Profile"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <Profile />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ minHeight: "100vh" }}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
