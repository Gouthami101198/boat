import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("UPI");

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      toast.error("Please enter your shipping address");
      return;
    }
    clearCart();
    
    toast.success("Order placed successfully!");

    navigate("/order-success");
  };

  return (
    <div className="container" style={{ padding: "60px 0", maxWidth: "800px" }}>
      <h1>Checkout</h1>

      <h2 style={{ marginTop: "30px" }}>Order Summary</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px 0",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <span>{item.name}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      <h2 style={{ marginTop: "25px" }}>
        Total: ₹{totalPrice}
      </h2>

      <h2 style={{ marginTop: "35px" }}>
        Shipping Address
      </h2>

      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your full shipping address..."
        style={{
          width: "100%",
          height: "120px",
          marginTop: "15px",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          resize: "none",
        }}
      />

      <h2 style={{ marginTop: "30px" }}>
        Payment Method
      </h2>

      <select
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "15px",
          borderRadius: "10px",
        }}
      >
        <option>UPI</option>
        <option>Credit / Debit Card</option>
        <option>Cash on Delivery</option>
      </select>

      <button
        onClick={handlePlaceOrder}
        style={{
          width: "100%",
          marginTop: "35px",
          padding: "16px",
          background: "linear-gradient(135deg,#2563eb,#06b6d4)",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;