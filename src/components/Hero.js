import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h2 className="animate-fade-in-up">Professional Laptop Service Center</h2>
        <p className="animate-fade-in-up delay-1">Expert hardware fixing for all laptop brands in Naagarabhaavi, Bengaluru.</p>
        <div className="hero-buttons animate-fade-in-up delay-2">
          <a href="#contact" className="btn btn-primary">Contact Us</a>
          <a href="tel:+919900934914" className="btn btn-secondary">
            <span className="desktop-text">Call: 99009 34914</span>
            <span className="mobile-text">Call Now</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator for Phones */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll</span>
        <div className="arrow-down"></div>
      </a>
    </section>
  );
};

export default Hero;
