import "./AboutHero.css";
import heroImage from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-content">

        <span className="tag">About boAt</span>

        <h1>
          powerful performance with modern design.
          <br />
          premium gadgets accessible to everyone.
        </h1>

        <p>
          Bringing premium audio experiences and smart lifestyle
            products to millions of customers through innovation,
            quality and style.
        </p>

        <Link to="/products" className="about-btn">
          Explore Products
        </Link>

      </div>

      <div className="about-image">
        <img src={heroImage} alt="About Zenvox" />
      </div>

    </section>
  );
}

export default AboutHero;