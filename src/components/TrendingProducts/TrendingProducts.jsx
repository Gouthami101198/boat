import "./TrendingProducts.css";
import products from "../../assets/data/products";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

function TrendingProducts() {
  return (
    <section 
      className="trending container"
      data-aos="fade-up"
    >

      <div 
        className="trending-header"
        data-aos="fade-right"
      >
        <div>
          <h2>Best Selling Products</h2>
          <p>Discover our best-selling gadgets.</p>
        </div>

        <Link to="/products" className="view-all-btn">
          View All
        </Link>
      </div>

      <div 
      className="product-grid"
      data-aos="zoom-in"
      data-aos-delay="200"
      >
        {products.slice(0, 4).map((product,index) => (
          <div
            key={product.id}
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
          
          <ProductCard
            product={product}
          />
          </div>
        ))}
      </div>

    </section>
  );
}

export default TrendingProducts;