import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Your trusted partner for laptop repairs</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>At QuickFix, we specialize in comprehensive laptop repair services. Whether it's a hardware malfunction, a broken screen, or software glitches, our expert technicians are equipped to handle it all.</p>
            <p>We pride ourselves on our ability to fix complex hardware issues that others might turn away. We service all major brands and models, ensuring your device gets back to you in perfect working condition.</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Laptops Fixed</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
