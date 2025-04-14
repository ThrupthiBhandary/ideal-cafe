import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <div className="container py-5 text-light">
      <h2 className="mb-4">Admin Dashboard</h2>

      <Row className="mb-4">
        <Col md={6} lg={4}>
          <Card bg="dark" text="light" className="mb-3">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>1,235</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card bg="dark" text="light" className="mb-3">
            <Card.Body>
              <Card.Title>Total Orders</Card.Title>
              <Card.Text>2,865</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card bg="dark" text="light" className="mb-3">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>₹10,45,000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card bg="secondary" text="light" className="mb-4">
        <Card.Body>
          <Card.Title>Manage Menu Items</Card.Title>
          <Button variant="light" className="me-2">Add Item</Button>
          <Button variant="light">Remove Item</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminDashboard;
