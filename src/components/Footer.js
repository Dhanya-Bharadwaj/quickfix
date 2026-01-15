import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">QuickFix<span className="highlight">.</span></h3>
            <p className="footer-desc">
              Your trusted partner for expert laptop repairs and services in Bengaluru. 
              Quality service, affordable prices, and customer satisfaction guaranteed.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span>📍</span> 
                No.3, 1st Floor, MN Complex, Naagarabhaavi, Bengaluru - 560072
              </li>
              <li>
                <span>📞</span> 
                <a href="tel:+919900934914">99009 34914</a>
              </li>
              <li>
                <span>✉️</span> 
                <a href="mailto:support@quickfix.com">support@quickfix.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} QuickFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
