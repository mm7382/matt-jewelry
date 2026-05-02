import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          MATT <span>JEWELRY</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#process">Bespoke</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="nav-actions">
          <button className="cart-btn">Cart (0)</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
