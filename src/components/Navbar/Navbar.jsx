import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import "./Navbar.css";
import { useCart } from "../../context/CartContext"; 
import toast from "react-hot-toast";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { wishlist, cart, cartAnimate, wishlistAnimate } = useCart();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );


  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);


  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/products?search=${search}`);
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    toast.success("Logged out successfully!");

    navigate("/");
  };

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="container navbar-container">

        <div className="logo">
          <h2>boAt</h2>
          <span>Experience the perfect blend of sound and style</span>
        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          {isLoggedIn ? (
            <button
              className="mobile-auth signup-mobile"
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="mobile-auth login-mobile"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="mobile-auth signup-mobile"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          )}

        </nav>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />

        </div>

        <div className="navbar-right">

          <button className="icon-btn" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <NavLink to="/wishlist" className={`icon-btn badge-btn ${wishlistAnimate ? "icon-bounce" : ""}`}>
            <FaHeart />
            <span>{wishlist.length}</span>
          </NavLink>

          <NavLink to="/cart" className={`icon-btn badge-btn ${cartAnimate ? "icon-bounce" : ""}`}>
            <FaShoppingCart />
            <span>{cart.length}</span>
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="login-btn"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="login-btn">
                Login
              </NavLink>

              <NavLink to="/signup" className="signup-btn">
                Sign Up
              </NavLink>
            </>
          )}

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;