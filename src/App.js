
import React, { useState, useEffect } from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import ContactUs from "./pages/ContactUs";
import Locations from "./pages/Locations";
import LoginSignup from "./components/LoginSignup";
import AdminDashboard from "./components/AdminDashboard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Profile from "./pages/Profile";
import OffersPage from "./pages/OffersPage";
import Footer from './components/Footer';
import { CartProvider } from "./context/CartContext";
import AdminLogin from "./pages/AdminLogin";
// ✅ Component that uses useLocation INSIDE Router
function AppRoutes({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage key={location.search} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/signin" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <CartProvider>
      <Router>
      <div className={`app-wrapper ${darkMode ? 'dark' : ''}`}>
          <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="icecream-drip"></div>
          <AppRoutes darkMode={darkMode} setDarkMode={setDarkMode} />

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
