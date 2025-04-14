import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import RolePrompt from './RolePrompt'; // Import the RolePrompt modal
import './Navbar.css';

const NavbarComponent = ({ darkMode, setDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showRolePrompt, setShowRolePrompt] = useState(false);  // State for role selection modal
  const [userRole, setUserRole] = useState(null);  // 'customer' or 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userRole === 'admin' && email === 'admin@example.com' && password === 'admin123') {
      // Admin login success
      alert("Admin logged in successfully");
      setShowLogin(false);
      navigate('/admin');  // Redirect to the Admin Dashboard
    } else if (userRole === 'customer') {
      // Customer login logic (you can implement as needed)
      alert("Customer logged in successfully");
      setShowLogin(false);
      navigate('/profile');  // Navigate to customer profile
    } else {
      alert("Invalid login credentials");
    }
  };

  const handleProfileClick = () => {
    setShowRolePrompt(true);  // Show the role selection modal
  };

  const handleRoleSelect = (role) => {
    setShowRolePrompt(false);  // Close the modal
    if (role === 'admin') {
      navigate('/admin-login');  // Redirect to admin login page
    } else {
      navigate('/signin');  // Redirect to customer login page
    }
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" className="px-4 navbar-custom">

        <Navbar.Brand as={Link} to="/">🍨Ideal Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>

          {/* Search form */}
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search ice creams 🍨"
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-white" type="submit">Search</Button>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/cart"><FaShoppingCart /></Nav.Link>
            <Nav.Link onClick={handleProfileClick}>
              <FaUserCircle />
            </Nav.Link>
          </Nav>
          <Form.Check 
  type="switch"
  id="dark-mode-switch"
  label="Dark Mode"
  checked={darkMode}
  onChange={() => setDarkMode(!darkMode)}
  className="ms-3 align-self-center"
/>

        </Navbar.Collapse>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>

            <InputGroup className="mb-3">
              <InputGroup.Text>Login as</InputGroup.Text>
              <Form.Select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                aria-label="Select Role"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </InputGroup>

            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Role Selection Modal */}
      <RolePrompt 
        show={showRolePrompt} 
        onSelect={handleRoleSelect} 
        onClose={() => setShowRolePrompt(false)} 
      />
    </>
  );
};

export default NavbarComponent; 