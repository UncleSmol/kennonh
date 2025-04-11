import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamMemberCard from '../components/TeamMemberCard';
import '../styles/TeamSection.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * TeamSection component - Displays the medical team members
 */
const TeamSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const teamCardsRef = useRef([]);

  // Sample team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      specialty: "Cardiology",
      experience: "15+ years",
      education: "Harvard Medical School"
    },
    {
      name: "Dr. Michael Chen",
      title: "Lead Surgeon",
      specialty: "Neurosurgery",
      experience: "12+ years",
      education: "Johns Hopkins University"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Senior Physician",
      specialty: "Internal Medicine",
      experience: "10+ years",
      education: "Stanford University School of Medicine"
    },
    {
      name: "Dr. David Williams",
      title: "Medical Director",
      specialty: "Orthopedics",
      experience: "14+ years",
      education: "Yale School of Medicine"
    }
  ];

  // Initialize animations
  useEffect(() => {
    // Title and description animations
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

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Team member cards animations
    gsap.fromTo(
      teamCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="team-section">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">Our Medical Team</h2>
        <p ref={descriptionRef} className="section-subtitle">
          Meet our team of experienced medical professionals dedicated to providing you with the highest quality care.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
              ref={el => teamCardsRef.current[index] = el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
