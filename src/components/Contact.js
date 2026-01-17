import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Visit our shop or call us today</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3><span>📍</span> Address</h3>
              <p>
                No.3, 1st Floor, MN Complex,<br/>
                Jnanabharathi Main Road, 4 Block,<br/>
                Teachers Colony, Nagarbhavi,<br/>
                Bengaluru, Karnataka 560072
              </p>
            </div>
            <div className="info-item">
              <h3><span>📞</span> Phone</h3>
              <p><a href="tel:+919900934914">99009 34914</a></p>
            </div>
            <div className="info-item">
              <h3><span>🕒</span> Working Hours</h3>
              <p>Mon - Sat: 10:00 AM - 8:30 PM<br/>Sun: Closed</p>
            </div>
          </div>
          <div className="contact-map">
             {/* Google Maps Embed Placeholder - using a static image or iframe for general area */}
             <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.89!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU2JzU2LjIiTiA3N8KwMzAnMzguOSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                frameBorder="0" 
                style={{border:0}} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
