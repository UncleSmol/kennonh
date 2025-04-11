import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AboutUsSection from './sections/AboutUsSection';
import './About.css';

/**
 * About component - Main component for the About page
 * This component combines different sections to create the complete About page
 */
const About = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section ref={heroRef} className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 ref={headingRef}>About KENNONH</h1>
          <p ref={subheadingRef}>Leading Healthcare in Witbank Since 2010</p>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />
      {/* Additional sections can be added here (e.g., timeline, facilities, etc.) */}
    </div>
  );
};

export default About;
