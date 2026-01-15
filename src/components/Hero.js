import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h2 className="animate-fade-in-up">Professional Laptop Service Center</h2>
        <p className="animate-fade-in-up delay-1">Expert hardware fixing for all laptop brands in Naagarabhaavi, Bengaluru.</p>
        <div className="hero-buttons animate-fade-in-up delay-2">
          <a href="#contact" className="btn btn-primary">Contact Us</a>
          <a href="tel:+919900934914" className="btn btn-secondary">Call: 99009 34914</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
