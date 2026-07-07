import "./ProductCard.css";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useCart();

  return (
    <div 
      className="product-card"
      data-aos="zoom-in-up"
    >
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <button 
        className="wish-btn"
        onClick={() => {
          addToWishlist(product);
          toast.success(`${product.name} added to wishlist!`);
        }}>
        <FaHeart />
      </button>

      <div className="product-info">

        <span className="rating">
          <FaStar /> {product.rating}
        </span>

        <h3>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h3>

        <p>₹{product.price}</p>

        <button 
          className="cart-btn"
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to cart!`);
          }}>
          <FaShoppingCart />
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;