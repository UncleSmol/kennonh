import React from 'react';

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{quote}</p>
      <p className="testimonial-author">— {author}</p>
    </div>
  );
};

export default TestimonialCard;