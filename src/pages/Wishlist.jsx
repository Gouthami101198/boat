import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Wishlist() {

  const { wishlist, removeFromWishlist } = useCart();

  return (

    <div className="container" style={{ padding: "60px 0" }}>

      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (

        <h3>Your wishlist is empty.</h3>

      ) : (

        wishlist.map((item) => (

          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "20px 0",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
            }}
          >


            <Link
              to={`/products/${item.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flex: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </Link>

            <button
              onClick={() => removeFromWishlist(item.id)}
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>

          </div>

        ))

      )}

    </div>

  );
}

export default Wishlist;