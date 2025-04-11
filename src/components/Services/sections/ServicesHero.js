import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IconBox from '../components/IconBox';
import '../styles/ServicesHero.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesHero component - Hero section for the Services page
 * Displays a title, description, and feature icons
 */
const ServicesHero = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconBoxesRef = useRef([]);

  // Icon data
  const iconData = [
    { icon: 'fa-user-md', text: 'Expert Specialists' },
    { icon: 'fa-hospital', text: 'Modern Facilities' },
    { icon: 'fa-heartbeat', text: 'Compassionate Care' },
    { icon: 'fa-shield-alt', text: 'Safe Environment' }
  ];

  // Initialize animations
  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
      }
    );
    
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.2, 
        ease: "power2.out" 
      }
    );
    
    gsap.fromTo(
      iconBoxesRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        delay: 0.4,
        ease: "back.out(1.7)" 
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="services-hero">
      <div className="section-container">
        <div className="services-hero-content">
          <h1 ref={titleRef}>Our Medical Services</h1>
          <p ref={subtitleRef}>
            KENNONH Medical Center offers a comprehensive range of healthcare services 
            delivered by experienced specialists in a state-of-the-art facility.
          </p>
          
          <div className="services-hero-icons">
            {iconData.map((item, index) => (
              <IconBox
                key={index}
                icon={item.icon}
                text={item.text}
                ref={el => iconBoxesRef.current[index] = el}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;