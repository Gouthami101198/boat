import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";

localStorage.removeItem("isLoggedIn");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: "10px",
            background: "#2563eb",
            color:"#fff",
            fontWeight: "600",
          },
        }}
      />
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);