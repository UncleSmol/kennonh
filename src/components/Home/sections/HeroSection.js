import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
// Commented until actual image is added
// import heroImage from '../../../images/medical-center-hero.jpg';

const HeroSection = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    // Hero section animations
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
    
    gsap.fromTo(
      ctaButtonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
    );
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="hero-section"
      // Uncomment when actual image is added
      // style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 ref={headingRef}>KENNONH Medical Center</h1>
        <p ref={subheadingRef}>Advanced Healthcare with a Personal Touch in Witbank</p>
        <Link to="/contact" ref={ctaButtonRef} className="cta-button">Book an Appointment</Link>
      </div>
    </section>
  );
};

export default HeroSection;