import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Hardware Repair",
      description: "Expert board-level chip replacement and motherboard repairs for all laptop brands.",
      icon: "🔧"
    },
    {
      title: "Screen Replacement",
      description: "Broken or cracked screen? We replace screens with high-quality original parts.",
      icon: "💻"
    },
    {
      title: "Battery & Charging",
      description: "Fixing charging port issues and battery replacements to keep you powered up.",
      icon: "🔋"
    },
    {
      title: "Software Solutions",
      description: "OS installation, virus removal, and speed optimization for better performance.",
      icon: "💿"
    },
    {
      title: "Keyboard & Touchpad",
      description: "Replacement of faulty keyboards and trackpads for smooth typing and navigation.",
      icon: "⌨️"
    },
    {
      title: "Data Recovery",
      description: "Recovering lost data from crashed hard drives and SSDs securely.",
      icon: "💾"
    }
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We fix what others can't</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
