// RolePrompt.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RolePrompt = ({ show, onSelect, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please select your role:</p>
        <Button variant="primary" onClick={() => onSelect('admin')} className="w-100 mb-2">
          Login as Admin
        </Button>
        <Button variant="secondary" onClick={() => onSelect('customer')} className="w-100">
          Login as Customer
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default RolePrompt;
