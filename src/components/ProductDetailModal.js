import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductDetailModal = ({ show, handleClose, item, handleCustomize }) => {
  if (!item) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          {/* Display the actual image of the item */}
          <img
            src={item.image || `https://via.placeholder.com/200x150?text=${item.name}`} // Fallback to placeholder if no image is provided
            alt={item.name}
            className="mb-3"
            style={{ width: '200px', height: '150px', objectFit: 'cover' }} // Adjust size and fit as necessary
          />
          <h5>₹{item.price}</h5>
          <p>{"⭐".repeat(item.rating)}</p>
          <p>This is a delicious {item.type.toLowerCase()}!</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleCustomize(item)}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailModal;
