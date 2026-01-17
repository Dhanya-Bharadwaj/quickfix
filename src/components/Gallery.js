import React, { useRef, useState, useEffect } from 'react';
import quickfix1 from '../assets/quickfix1.webp';
import quickfix2 from '../assets/quickfix2.webp';
import quickfix3 from '../assets/quickfix3.webp';
import quickfix4 from '../assets/quickfix4.webp';

const Gallery = () => {
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

    const photos = [quickfix1, quickfix2, quickfix3, quickfix4];

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Work</h2>
          <p>Glimpse of our service center</p>
        </div>
        
        <div className="gallery-wrapper testimonials-wrapper"> {/* Reusing wrapper style for relative positioning */}
            {canScrollLeft && (
                <button className="nav-btn prev" onClick={() => scroll('left')}>&#10094;</button>
            )}

            <div className="gallery-grid" ref={scrollRef} onScroll={checkScroll}>
                {photos.map((photo, index) => (
                    <div key={index} className="gallery-slide">
                        <div className="gallery-card">
                            <img src={photo} alt={`Gallery ${index + 1}`} className="gallery-img" />
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


export default Gallery;
