import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddToCartButton = ({ item }) => {
  const { addToCart } = useContext(CartContext); // Access addToCart from context

  // Handle add to cart action
  const handleAddToCart = () => {
    addToCart(item); // Add item to cart when button is clicked
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;
