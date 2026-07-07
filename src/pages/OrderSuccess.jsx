import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  return (
    <div
      className="container"
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "550px",
          width: "90%",
          padding: "30px, 20px",
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 15px 40px rgba(0,0,0,.08)",
        }}
      >
        <FaCheckCircle
          style={{
            fontSize: "90px",
            color: "#22c55e",
            marginBottom: "20px",
          }}
        />

        <h1 
            style={{ 
            fontSize: "clamp(2rem, 6vm, 3rem)",
            lineHeight: "1.2",
            marginBottom: "15px",
            color: "#111827"
         }}>
          Order Placed Successfully!
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "35px",
            lineHeight: "1.7",
          }}
        >
          Thank you for shopping with boAt.
          <br />
          Your order has been placed successfully.
        </p>

        <Link
          to="/products"
          style={{
            display: "inline-block",
            padding: "14px 30px",
            borderRadius: "12px",
            background: "linear-gradient(135deg,#2563eb,#06b6d4)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;