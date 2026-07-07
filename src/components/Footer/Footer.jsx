import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <h2>boAt</h2>
          <p>
             warranty and quality assurance
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Support</h3>

          <p>Email: support@boAt-lifestyle.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Mumbai, India</p>
        </div>

        <div>

          <h3>Follow Us</h3>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>

        </div>

      </div>

      <div className="copyright">
        © 2026 boAt. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;