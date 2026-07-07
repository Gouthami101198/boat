import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css"
import { AnimatePresence, motion } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 100,
    });
    
    const timer = setTimeout(() =>
    {
      setLoading(false);
    }, 2500);

    return () =>
      clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <>
    <ScrollProgress />
    <Navbar />
    <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />

          <Route
            path="/products"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Products />
              </motion.div>
            }
          />

          <Route
            path="/products/:id"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductDetails />
              </motion.div>
            }
          />

          <Route
            path="/about"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            }
          />

          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />

          <Route
            path="/login"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Login />
              </motion.div>
            }
          />

          <Route
            path="/signup"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Signup />
              </motion.div>
            }
          />

          <Route
            path="/cart"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Cart />
              </motion.div>
            }
          />

          <Route
            path="/checkout"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Checkout />
              </motion.div>
            }
          />

          <Route
            path="/order-success"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <OrderSuccess />
              </motion.div>
            }
          />

          <Route
            path="/wishlist"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Wishlist />
              </motion.div>
            }
          />

          <Route
            path="*"
            element={
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    <Footer />
    <ScrollToTopButton />
    </>
  );
}

export default App;