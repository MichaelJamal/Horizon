import React from 'react';
import './styles.css'

export const Hero = () => {
  const heroImage = require("../images/hero-shape.png");
  return (
    <section className="section hero" aria-label="home" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">
            <span className="span">Global Delivery </span> Network
          </h2>
          <p className="hero-text">
          Welcome to Horizon Express - Your Trusted Logistics Partner!
          </p>
          <a href='/#service' className="btn-outline">View Services</a> 
          <img src={heroImage} width="116" height="116" loading="lazy" className="hero-shape shape-1" alt="shape 1" />
          <img src={heroImage} width="116" height="116" loading="lazy" className="hero-shape shape-2" alt="shape 2" />
        </div>
      </div>
    </section>
  );
};