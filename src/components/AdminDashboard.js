import React, { useState } from 'react';
import { Form, Button, Table, Container, Row, Col, Card } from 'react-bootstrap';

const AdminDashboard = () => {
  const [items, setItems] = useState([
    { name: 'Gadbad Ice Cream', price: 120 },
    { name: 'Chocolate Sundae', price: 100 },
  ]);
  
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemName && itemPrice) {
      setItems([
        ...items,
        { name: itemName, price: parseFloat(itemPrice) }
      ]);
      setItemName('');
      setItemPrice('');
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, idx) => idx !== index));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <h2>Admin Dashboard</h2>
              <Form onSubmit={handleAddItem}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Item Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter item name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter price"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" type="submit" className="w-100">
                  Add Item
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Menu Items</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price (₹)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDeleteItem(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
