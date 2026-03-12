import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const IceCreamCustomizer = ({ show, onClose, onAdd, basePrice }) => {
  const [flavor, setFlavor] = useState('Vanilla');
  const [container, setContainer] = useState('Cone');
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const allToppings = ['Sprinkles', 'Choco Chips', 'Nuts', 'Cherry'];

  const handleToppingChange = (e) => {
    const value = e.target.value;
    setToppings(prev =>
      prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
    );
  };

  const handleQuantityChange = (action) => {
    setQuantity(prev => (action === 'increase' ? prev + 1 : Math.max(1, prev - 1)));
  };

  // Calculate the price based on flavor, container, toppings, and quantity
  const calculatePrice = () => {
    let price = basePrice;

    if (flavor === 'Chocolate') price += 20;
    else if (flavor === 'Strawberry') price += 25;
    else if (flavor === 'Mango') price += 30;

    if (container === 'Cup') price += 10;

    price += toppings.length * 5; // Each topping adds 5 units to the price
    return price * quantity; // Multiply by quantity
  };

  const handleAdd = () => {
    const customization = { flavor, container, toppings, quantity, price: calculatePrice() };
    onAdd(customization); // send back to parent
    onClose();
  };


  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Customize Your Ice Cream</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Flavor</Form.Label>
            <Form.Select value={flavor} onChange={e => setFlavor(e.target.value)}>
              <option>Vanilla</option>
              <option>Chocolate</option>
              <option>Strawberry</option>
              <option>Mango</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Container</Form.Label>
            <Form.Check
              type="radio"
              label="Cone"
              name="container"
              value="Cone"
              checked={container === 'Cone'}
              onChange={e => setContainer(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Cup"
              name="container"
              value="Cup"
              checked={container === 'Cup'}
              onChange={e => setContainer(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Toppings</Form.Label>
            {allToppings.map(top => (
              <Form.Check
                key={top}
                type="checkbox"
                label={top}
                value={top}
                checked={toppings.includes(top)}
                onChange={handleToppingChange}
              />
            ))}
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Quantity</Form.Label>
            <div className="d-flex align-items-center">
              <Button variant="outline-secondary" onClick={() => handleQuantityChange('decrease')} disabled={quantity <= 1}>-</Button>
              <Form.Control type="number" value={quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
              <Button variant="outline-secondary" onClick={() => handleQuantityChange('increase')}>+</Button>
            </div>
          </Form.Group>
        </Form>

        <div className="mt-3">
          <h5>Total Price: ₹{calculatePrice()}</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleAdd}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IceCreamCustomizer;
