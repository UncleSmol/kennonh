import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHeart, FaAward, FaUsers, FaMicroscope } from 'react-icons/fa';
import TeamModal from '../components/TeamModal';
import '../styles/AboutUsSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * AboutUsSection component - Displays detailed information about KENNONH Medical Center
 */
const AboutUsSection = () => {
  // State to control team modal visibility
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  
  // Refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const historyRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef([]);

  // Company values data with React Icons
  const valuesData = [
    {
      icon: <FaHeart />,
      title: 'Compassion',
      description: 'We treat every patient with empathy, dignity, and respect, understanding the human side of healthcare.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We maintain the highest standards in medical practice, continuously improving our skills and facilities.'
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description: 'We are dedicated to serving and improving the health of our Witbank community through accessible care.'
    },
    {
      icon: <FaMicroscope />,
      title: 'Innovation',
      description: 'We embrace cutting-edge medical technologies and approaches to provide the best possible patient outcomes.'
    }
  ];

  // Handle opening the team modal
  const openTeamModal = () => {
    setIsTeamModalOpen(true);
  };

  // Handle closing the team modal
  const closeTeamModal = () => {
    setIsTeamModalOpen(false);
  };

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

    // Animate history section
    gsap.fromTo(
      historyRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: historyRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate mission section
    gsap.fromTo(
      missionRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate team section
    gsap.fromTo(
      teamRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate values cards
    gsap.fromTo(
      valuesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valuesRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="section-container">
        <h1 ref={titleRef} className="section-title">About KENNONH Medical Center</h1>
        
        <div className="about-content">
          <div ref={historyRef} className="about-card about-history">
            <h2>Our Story</h2>
            <p>
              Founded in 2010 by Dr. N. Mohlahlo, KENNONH Medical Center emerged from a vision to transform healthcare delivery in Witbank. After completing medical training at the University of Cape Town and specializing in internal medicine, Dr. Mohlahlo returned to Witbank with the mission to establish a world-class medical facility that combines advanced technology with compassionate care.
            </p>
            <p>
              What began as a small clinic has grown into a comprehensive medical center serving thousands of patients annually. Over the past decade, we have continuously expanded our facilities, services, and team of specialists to meet the evolving healthcare needs of our community.
            </p>
          </div>
          
          <div ref={missionRef} className="about-card about-mission">
            <h2>Our Mission</h2>
            <p>
              At KENNONH Medical Center, our mission is to provide exceptional, patient-centered healthcare that improves the quality of life for the people of Witbank and surrounding communities. We strive to:
            </p>
            <ul>
              <li>Deliver comprehensive medical services with the highest standards of excellence</li>
              <li>Ensure accessible and affordable healthcare for all community members</li>
              <li>Promote preventive care and wellness education</li>
              <li>Continuously advance our medical knowledge and technological capabilities</li>
              <li>Treat each patient with dignity, respect, and personalized attention</li>
            </ul>
          </div>
          
          <div ref={teamRef} className="about-card about-team">
            <h2>Our Team</h2>
            <p>
              Led by Medical Director Dr. N. Mohlahlo, our team consists of highly qualified healthcare professionals dedicated to providing exceptional care. Our staff includes experienced physicians across various specialties, certified nurses, skilled technicians, and compassionate support personnel.
            </p>
            <p>
              Each team member undergoes rigorous training and continuous education to stay at the forefront of medical advances. We believe in a collaborative approach to healthcare, working together to ensure comprehensive treatment plans that address each patient's unique needs.
            </p>
            <div className="team-cta">
              <button 
                className="secondary-button"
                onClick={openTeamModal}
                type="button"
              >
                Meet Our Team
              </button>
            </div>
          </div>
          
          <h2 className="values-title">Our Values</h2>
          <div className="values-grid">
            {valuesData.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                ref={el => valuesRef.current[index] = el}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Modal */}
      {isTeamModalOpen && (
        <TeamModal 
          isOpen={isTeamModalOpen} 
          onClose={closeTeamModal} 
        />
      )}
    </section>
  );
};

export default AboutUsSection;
