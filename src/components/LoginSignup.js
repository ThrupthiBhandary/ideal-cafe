import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <Form>
        {!isLogin && (
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </Form>
      <Button variant="link" onClick={toggleForm} className="mt-2">
        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
      </Button>
    </div>
  );
};

export default LoginSignup;