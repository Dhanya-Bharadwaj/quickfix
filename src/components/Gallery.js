import React from 'react';

const Gallery = () => {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Work</h2>
          <p>Glimpse of our service center</p>
        </div>
        <div className="gallery-grid">
            {/* Placeholders for photos - user said they will upload later */}
            <div className="gallery-item placeholder">Photo 1</div>
            <div className="gallery-item placeholder">Photo 2</div>
            <div className="gallery-item placeholder">Photo 3</div>
            <div className="gallery-item placeholder">Photo 4</div>
        </div>
        <p className="text-center mt-20" style={{color: '#888'}}>(Photos coming soon)</p>
      </div>
    </section>
  );
};

export default Gallery;
