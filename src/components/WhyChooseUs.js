import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Technicians",
      text: "Our team consists of certified hardware experts with years of experience."
    },
    {
      title: "Transparent Pricing",
      text: "No hidden charges. We provide a clear estimate before starting any work."
    },
    {
      title: "Quick Turnaround",
      text: "We understand the importance of your device and strive for same-day delivery."
    },
    {
      title: "Customer Satisfaction",
      text: "Highly rated by our customers for our professional and friendly service."
    }
  ];

  return (
    <section className="section why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>
        <div className="features-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="feature-item">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
