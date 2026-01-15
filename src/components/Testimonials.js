import React, { useRef, useState, useEffect } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Use a small buffer (1px) for float calculation differences
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth; // Scroll full width
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
        
        <div className="testimonials-wrapper">
          {canScrollLeft && (
            <button className="nav-btn prev" onClick={() => scroll('left')}>&#10094;</button>
          )}
          
          <div className="testimonials-grid" ref={scrollRef} onScroll={checkScroll}>
            {reviews.map((review, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="rating">{review.rating}</div>
                  <p className="review-text">{review.text}</p>
                  <h4 className="review-author">{review.name}</h4>
                </div>
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <button className="nav-btn next" onClick={() => scroll('right')}>&#10095;</button>
          )}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
