import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import navigate hook for redirection

const Checkout = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext); // Get cartItems and removeFromCart from context
  const navigate = useNavigate(); // Use navigate to redirect after checkout

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder: Add your logic here for order placement (e.g., API call, clearing cart, etc.)
    alert('Order placed successfully!');

    // Optionally, clear the cart after submitting the order:
    cartItems.forEach(item => removeFromCart(item.id)); // Remove items from cart
    clearCart(); // Clear the cart context
    navigate('/cart'); // Redirect to the homepage (or order confirmation page)
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Delivery Option</Form.Label>
          <Form.Select>
            <option>Dine-in</option>
            <option>Takeaway</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" type="submit">
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
