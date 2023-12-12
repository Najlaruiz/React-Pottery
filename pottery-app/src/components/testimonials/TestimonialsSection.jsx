import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="section testi" aria-label="testimonials">
      <div className="container">
        <div className="testi-card">
          <p className="card-text">
            Etiam ultricies eros ut malesuada condimentum. Cras in nisl sit amet dui molestie tristique ut vitae
            libero nec laoreet purus.
          </p>
          <p className="client-name">Najlaa el badraouy</p>
          <p className="client-title">Founder Crafti</p>
          <img src="images/Tour potier.jpg" width="50" height="50" loading="lazy" className="icon" alt="Tour potier" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

