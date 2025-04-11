import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaTimes, FaGraduationCap } from 'react-icons/fa';
import '../styles/TeamModal.css';

/**
 * TeamModal component - A popup modal that displays team members
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Function to call when closing the modal
 */
const TeamModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const overlayRef = useRef(null);
  
  // Team members data - Simplified information
  const teamMembers = [
    {
      name: "Dr. Kenny Shikwane Mohlahlo",
      title: "General Practitioner",
      education: "MBChB - University of Pretoria (2018)",
      description: "Dr. Kenny Shikwane Mohlahlo is a dedicated General Practitioner providing comprehensive primary care at the medical center in Emalahleni."
    },
    {
      name: "Jane Doe",
      title: "Administration Manager",
      experience: "8+ years in healthcare administration",
      education: "B.A. in Healthcare Management",
      description: "Jane oversees all administrative operations at the medical center, ensuring smooth patient experiences from appointment scheduling to billing processes. Her friendly demeanor and organizational skills keep our facility running efficiently."
    }
  ];

  // Animation for opening the modal
  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
      
      // Animate in the overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3
      });
      
      // Animate in the content
      gsap.fromTo(
        modalContentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
    
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is restored on unmount
    };
  }, [isOpen]);
  
  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Close when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} className="team-modal">
      <div 
        ref={overlayRef} 
        className="modal-overlay" 
        onClick={handleOverlayClick}
      ></div>
      <div ref={modalContentRef} className="modal-content">
        <button className="modal-close-button" onClick={onClose} type="button">
          <FaTimes />
          <span className="sr-only">Close</span>
        </button>
        
        <h2 className="modal-title">Our Medical Team</h2>
        
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-image-container">
                <div className="member-image-placeholder">
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <div className="member-details">
                  {member.experience && (
                    <p>
                      <strong>Experience:</strong> {member.experience}
                    </p>
                  )}
                  <div className="info-row">
                    <FaGraduationCap className="info-icon-small" />
                    <p><strong>Education:</strong> {member.education}</p>
                  </div>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
