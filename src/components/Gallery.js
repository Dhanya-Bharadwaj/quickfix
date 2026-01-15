import React, { useRef, useState, useEffect } from 'react';

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

    const photos = ["Photo 1", "Photo 2", "Photo 3", "Photo 4"];

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
                        <div className="gallery-card placeholder">
                            {photo}
                        </div>
                    </div>
                ))}
            </div>

            {canScrollRight && (
                <button className="nav-btn next" onClick={() => scroll('right')}>&#10095;</button>
            )}
        </div>
        
        <p className="text-center mt-20" style={{color: '#888'}}>(Photos coming soon)</p>
      </div>
    </section>
  );
};


export default Gallery;
