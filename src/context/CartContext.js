import React, { createContext, useState } from 'react';

// Create CartContext to manage cart items
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
