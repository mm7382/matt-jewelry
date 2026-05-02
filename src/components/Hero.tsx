import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Precision Cut<br/>Symmetric Beauty</h1>
        <p className="hero-subtitle">Engineering the perfect reflection in every gem.</p>
        <div className="hero-actions">
          <a href="#shop" className="btn-primary">Discover Collection</a>
          <a href="#process" className="btn-secondary">Our Craft</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
