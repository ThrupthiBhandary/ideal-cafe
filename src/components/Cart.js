import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Correct import of CartContext
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Use context to get cartItems and removeFromCart

  // Calculate the total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p> // Message when the cart is empty
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ₹{item.price}
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>
          <Link to="/checkout">
            <Button variant="primary">Proceed to Checkout</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
