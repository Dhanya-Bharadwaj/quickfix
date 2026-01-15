import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul K.",
      text: "Excellent service! My laptop display was broken and they fixed it within 2 hours. Very professional.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Priya S.",
      text: "Best place for hardware issues. Other shops told me to change the motherboard, but these guys repaired it at a fraction of the cost.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Arun M.",
      text: "Very polite staff and quick resolution of my software problems. Highly recommended in Naagarabhaavi.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section id="reviews" className="section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Customer Reviews</h2>
          <p>What our clients say about us</p>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">{review.rating}</div>
              <p className="review-text">{review.text}</p>
              <h4 className="review-author">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
