import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (

    <section className="container" style={{padding:"60px 0"}}>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"50px",
        alignItems:"center"
      }}>

        <img
          src={product.image}
          alt={product.name}
          style={{
            width:"100%",
            borderRadius:"20px"
          }}
        />

        <div>

          <h1>{product.name}</h1>

          <h2 style={{color:"#2563eb"}}>
            ₹{product.price}
          </h2>

          <p style={{margin:"20px 0"}}>
            Rating ⭐ {product.rating}
          </p>

          <p>
             Premium quality  for an exceptional experience.
          </p>

          <button
            style={{
              marginTop:"30px",
              padding:"15px 30px",
              border:"none",
              borderRadius:"10px",
              background:"#2563eb",
              color:"#fff",
              cursor:"pointer"
            }}
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} added to cart!`);
            }}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </section>

  );
}

export default ProductDetails;