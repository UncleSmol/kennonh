import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCard';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Service data
const servicesData = [
  {
    icon: "fas fa-heartbeat",
    title: "General Medicine",
    description: "Comprehensive primary care for patients of all ages, focusing on prevention, diagnosis, and treatment of common illnesses."
  },
  {
    icon: "fas fa-stethoscope",
    title: "Specialized Care",
    description: "Expert treatment in cardiology, diabetes management, respiratory health, and other specialized fields."
  },
  {
    icon: "fas fa-x-ray",
    title: "Diagnostic Services",
    description: "Advanced imaging, laboratory testing, and diagnostic procedures with quick and accurate results."
  },
  {
    icon: "fas fa-clinic-medical",
    title: "Preventive Health",
    description: "Wellness programs, health screenings, vaccinations, and lifestyle counseling to maintain optimal health."
  }
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Services section animation
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.service-card'),
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="services-section">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="services-cta">
          <Link to="/services" className="secondary-button">View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;