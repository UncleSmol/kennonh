import React from 'react';
import TestimonialCard from './TestimonialCard';

// Testimonial data
const testimonials = [
  {
    quote: "Dr. Mohlahlo and the team at KENNONH Medical Center provided exceptional care during my recovery. Their attention to detail and genuine concern made all the difference.",
    author: "Sarah M., Witbank"
  }
  // More testimonials can be added here
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Patients Say</h2>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;