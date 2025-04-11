import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Commented until actual image is added
// import drMohlahloImage from '../../../images/dr-mohlahlo.jpg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Profile section animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="profile-section">
      <div className="profile-container">
        <h2>About KENNONH Medical Center</h2>
        <div className="profile-content">
          <div className="profile-image">
            {/* Replace with actual image when available */}
            <div className="profile-image-placeholder">
              <span>Dr. Mohlahlo</span>
            </div>
            {/* Uncomment when actual image is added */}
            {/* <img src={drMohlahloImage} alt="Dr. Mohlahlo" /> */}
          </div>
          <div className="profile-text">
            <h3>A Message from Dr. Mohlahlo</h3>
            <p>
              Founded in 2010, KENNONH Medical Center represents my vision of bringing world-class healthcare to the Witbank community. After completing my medical training at the University of Cape Town and specializing in internal medicine, I returned to my hometown with a mission to transform healthcare delivery in our region.
            </p>
            <p>
              At KENNONH, we combine cutting-edge medical technology with compassionate care. Our state-of-the-art facility houses comprehensive diagnostic services, specialized treatment units, and a team of dedicated healthcare professionals committed to excellence.
            </p>
            <p>
              What sets us apart is our patient-centered approach. We believe in treating the whole person, not just the condition. Every patient who walks through our doors receives individualized care plans designed to address their unique health needs and concerns.
            </p>
            <p>
              Over the past decade, we've grown from a small clinic to a comprehensive medical center serving thousands of patients annually. Our commitment to continuous improvement and community wellness programs has established KENNONH as a trusted healthcare leader in Mpumalanga province.
            </p>
            <p className="profile-signature">— Dr. N. Mohlahlo, MD, Founder & Medical Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;