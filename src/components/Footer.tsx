import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>MATT JEWELRY</h3>
          <p>Precision Cut Gems & Symmetric Artistry</p>
        </div>
        <div className="footer-links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.threads.net/@matt.jeweiry" target="_blank" rel="noreferrer">Threads</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Matt Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
