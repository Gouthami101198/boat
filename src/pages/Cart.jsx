import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      toast.error("Please login to continue checkout");
      navigate("/login", {
        state: {
          from: "/checkout",
        },
      });
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="container" style={{ padding: "60px 0" }}>
      <h1 style={{ marginBottom: "30px" }}>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                marginBottom: "20px",
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
                    borderRadius: "10px",
                  }}
                />

                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
              </Link>

              <button
                onClick={() => removeFromCart(item.id)}
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
          ))}

          <div
            style={{
              marginTop: "30px",
              textAlign: "right",
            }}
          >
            <h2>Total: ₹{totalPrice}</h2>

            <button
              onClick={handleCheckout}
              style={{
                marginTop: "15px",
                padding: "14px 35px",
                background: "linear-gradient(135deg,#2563eb,#06b6d4)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;