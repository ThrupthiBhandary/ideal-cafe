// pages/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // No hardcoded credentials, any email and password will be accepted
    if (email && password) {
      navigate('/admin-dashboard');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="container mt-5 text-white bg-dark p-4 rounded" style={{ maxWidth: '400px' }}>
      <h3>Admin Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="form-control my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control my-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
