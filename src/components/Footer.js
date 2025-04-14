// components/Footer.js
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Column 1 - About Us */}
          <Col md={4} sm={12} className="mb-3">
            <h5 className="text-uppercase">About Ideal Café</h5>
            <p>
              Ideal Café offers a delightful range of ice creams and desserts to satisfy your sweet cravings. With a rich variety of flavors and toppings, every scoop is a treat you won't forget!
            </p>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col md={4} sm={12} className="mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark border-0 text-white">
                <a href="/" className="text-white text-decoration-none">Home</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white">
                <a href="/menu" className="text-white text-decoration-none">Menu</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white">
                <a href="/offers" className="text-white text-decoration-none">Offers</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white">
                <a href="/locations" className="text-white text-decoration-none">Locations</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white">
                <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Column 3 - Social Media */}
          <Col md={4} sm={12} className="mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 Ideal Café. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
