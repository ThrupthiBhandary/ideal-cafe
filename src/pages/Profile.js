import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
      <h4>Order History:</h4>
      <ul>
        <li>Gadbad Ice Cream x2</li>
        <li>Chocolate Sundae x1</li>
      </ul>
    </div>
  );
};

export default Profile;