import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/ServicesList.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesList component - Displays a list of available medical services
 */
const ServicesList = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef([]);

  // Sample services data
  const servicesData = [
    {
      title: 'Primary Care',
      description: 'Comprehensive healthcare services for patients of all ages, focusing on prevention, diagnosis, and treatment of common illnesses.',
      icon: 'fa-stethoscope'
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency medical services for urgent health situations requiring immediate attention.',
      icon: 'fa-ambulance'
    },
    {
      title: 'Specialized Medicine',
      description: 'Specialized care in various medical fields including cardiology, neurology, orthopedics, and more.',
      icon: 'fa-heart'
    },
    {
      title: 'Diagnostics',
      description: 'Advanced diagnostic services including laboratory tests, imaging, and personalized health assessments.',
      icon: 'fa-microscope'
    },
    {
      title: 'Rehabilitation',
      description: 'Comprehensive rehabilitation programs designed to help patients recover from injuries, surgeries, or medical conditions.',
      icon: 'fa-walking'
    },
    {
      title: 'Mental Health',
      description: 'Supportive mental health services including counseling, therapy, and psychiatric care.',
      icon: 'fa-brain'
    }
  ];

  // Initialize animations
  useEffect(() => {
    // Animate title on scroll
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate service cards on scroll
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="services-list-section">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">Our Medical Services</h2>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              ref={el => servicesRef.current[index] = el}
            >
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
