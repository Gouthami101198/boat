import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartAnimate, setCartAnimate] = useState(false);
  const [wishlistAnimate, setWishlistAnimate] = useState(false);

  const addToCart = (product) => {

    const exists = cart.find(item => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
      setCartAnimate(true);
      setTimeout(() => {
        setCartAnimate(false);
      }, 500);
    }

  };

  const addToWishlist = (product) => {

    const exists = wishlist.find(item => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
      setWishlistAnimate(true);
      setTimeout(() => {
        setWishlistAnimate(false);
      }, 500);
    }

  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        cartAnimate,
        wishlistAnimate,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);