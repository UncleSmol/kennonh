import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Experience the KENNONH Difference</h2>
        <p>Schedule your appointment today and take the first step towards better health.</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </section>
  );
};

export default CtaSection;