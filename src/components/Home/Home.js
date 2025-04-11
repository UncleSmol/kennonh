
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Home.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Section Component
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
    <section ref={heroRef} className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 ref={headingRef}>Dr. Kenny Shikwane Mohlahlo</h1>
        <p ref={subheadingRef}>General Practitioner at MPark Medical Center in Emalahleni</p>
        <Link to="/contact" ref={ctaButtonRef} className="cta-button">Book an Appointment</Link>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const profileSectionRef = useRef(null);

  useEffect(() => {
    // Profile section animation
    gsap.fromTo(
      profileSectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: profileSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={profileSectionRef} className="profile-section">
      <div className="profile-container">
        <h2>About Dr. Kenny Shikwane Mohlahlo</h2>
        <div className="profile-content">
          <div className="profile-image">
            {/* Using a placeholder div until actual image is available */}
            <div className="profile-image-placeholder">
              <span>Dr. Mohlahlo</span>
            </div>
          </div>
          <div className="profile-text">
            <h3>Welcome to My Practice</h3>
            <p>
              As a dedicated General Practitioner at MPark Medical Center, I am committed to providing comprehensive and patient-centered healthcare to the Emalahleni community. With a strong foundation in general medicine, I offer a wide range of medical services to patients of all ages.
            </p>
            <p>
              After completing my medical training at the University of Pretoria in 2018 (MBChB), I've focused on delivering quality primary care with an emphasis on preventative health measures and managing chronic conditions.
            </p>
            <p>
              My practice at MPark Medical Center is equipped with modern facilities to ensure accurate diagnoses and effective treatments. I believe in a holistic approach to healthcare, addressing not just the physical symptoms but considering the overall well-being of each patient.
            </p>
            <p>
              I welcome you to my practice and look forward to partnering with you on your health journey.
            </p>
            <p className="profile-signature">— Dr. Kenny Shikwane Mohlahlo, MBChB, General Practitioner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const servicesRef = useRef(null);
  
  // Services data
  const servicesData = [
    {
      icon: "fas fa-heartbeat",
      title: "General Medicine",
      description: "Comprehensive primary care for patients of all ages, focusing on prevention, diagnosis, and treatment of common illnesses."
    },
    {
      icon: "fas fa-stethoscope",
      title: "Preventive Care",
      description: "Regular check-ups, health screenings, and vaccinations to maintain optimal health and prevent diseases."
    },
    {
      icon: "fas fa-x-ray",
      title: "Diagnostic Services",
      description: "Advanced imaging, laboratory testing, and diagnostic procedures with quick and accurate results."
    },
    {
      icon: "fas fa-clinic-medical",
      title: "Chronic Disease Management",
      description: "Ongoing care and monitoring for conditions like diabetes, hypertension, and respiratory disorders."
    }
  ];

  useEffect(() => {
    // Services section animation
    gsap.fromTo(
      servicesRef.current.querySelectorAll('.service-card'),
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={servicesRef} className="services-section">
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

// Testimonial Card Component
const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{quote}</p>
      <p className="testimonial-author">— {author}</p>
    </div>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "Dr. Mohlahlo is an excellent physician who takes time to listen and provide thoughtful care. His attention to detail and genuine concern made all the difference in my recovery.",
      author: "Sarah M., Emalahleni"
    }
    // More testimonials can be added here
  ];

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

// CTA Section Component
const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Book Your Appointment Today</h2>
        <p>Take the first step towards better health by scheduling a consultation at MPark Medical Center.</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Home;
