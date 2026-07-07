import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div 
          className="hero-content"
          data-aos="fade-right"
        >

          <span className="hero-tag">
             New Collections 2026
          </span>

          <h1>
            Level Up Your  
            <span> Audio Experience </span>
        
          </h1>

          <p>
            Discover premium earbuds, smart watches and Bluetooth
            
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="shop-btn">
              Shop Now
            </Link>

            <Link to="/about" className="explore-btn">
              Explore <FaArrowRight />
            </Link>

          </div>

          <div 
            className="hero-stats"
            data-aos="fade-up"
            data-aos-delay="400"
          >

            <div>
              <h2>5M++</h2>
              <p> HappyCustomers</p>
            </div>

            <div>
              <h2>500+</h2>
              <p> Premium Products</p>
            </div>

            <div>
              <h2>4.8★</h2>
              <p>Rating</p>
            </div>

            <div>
              <h2>25k+</h2>
              <p>Orders deliverd</p>
            </div>
            <div>
              <h2>250+</h2>
              <p>Cities</p>
            </div>
          </div>

        </div>

        

      </div>

    </section>
  );
}

export default Hero;
