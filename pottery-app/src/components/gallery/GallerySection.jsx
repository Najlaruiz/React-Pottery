import React from 'react';

const GallerySection = () => {
  return (
    <section className="gallery">
      <ul className="gallery-list">
        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: "url('images/gallery-1.jpeg')" }}>
            <div className="card-content">
              <h3 className="h3 card-title">Vases & Plant Pots</h3>
              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: "url('images/gallery-2.jpeg')" }}>
            <div className="card-content">
              <h3 className="h3 card-title">Pottery</h3>
              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: "url('images/gallery-3.jpeg')" }}>
            <div className="card-content">
              <h3 className="h3 card-title">Sculpturing</h3>
              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div className="gallery-card has-bg-image has-after" style={{ backgroundImage: "url('images/gallery-4.jpeg')" }}>
            <div className="card-content">
              <h3 className="h3 card-title">Accessories</h3>
              <a href="#" className="btn-link">
                <span className="span">View Gallery</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default GallerySection;
