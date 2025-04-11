import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFileMedical, FaIdCard, FaCertificate, FaFileContract, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Documentation.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Documentation component - Displays certificates, practice numbers, 
 * accreditations, and legal documents for the medical practice
 */
const Documentation = () => {
  // Refs for animations
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const certificatesRef = useRef(null);
  const registrationsRef = useRef(null);
  const accreditationsRef = useRef(null);
  const legalDocumentsRef = useRef(null);
  
  // Document data
  const certificates = [
    {
      title: "Medical Degree - MBChB",
      issuer: "University of Pretoria",
      date: "2018",
      description: "Doctor of Medicine and Bachelor of Surgery degree certification",
      id: "CERT-MBChB-2018-001",
      file: "/documents/mbchb-certification.pdf" // Path to document file
    }
  ];
  
  const registrations = [
    {
      title: "Health Professions Council of South Africa (HPCSA)",
      number: "MP0752584",
      date: "2018-Present",
      description: "Registered General Practitioner with the HPCSA",
      verificationLink: "https://hpcsa.co.za/verify" // Link to verification website
    },
    {
      title: "Practice Number",
      number: "0372919750",
      date: "2019-Present",
      description: "Medical practice number for billing and insurance purposes",
      verificationLink: "https://www.medicalschemes.co.za/verify-provider/"
    }
  ];
  
  const accreditations = [
    {
      title: "Board of Healthcare Funders (BHF)",
      id: "BHF-2019-12345",
      date: "2019-Present",
      description: "Recognized healthcare provider accredited by the BHF"
    }
  ];
  
  const legalDocuments = [
    {
      title: "Practice Privacy Policy",
      date: "Last updated: January 2023",
      description: "Details how patient data is collected, used, and protected",
      file: "/documents/privacy-policy.pdf"
    },
    {
      title: "Terms of Service",
      date: "Last updated: January 2023",
      description: "Outlines the terms of medical services provided",
      file: "/documents/terms-of-service.pdf"
    },
    {
      title: "POPIA Compliance Statement",
      date: "Last updated: January 2023",
      description: "Statement of compliance with the Protection of Personal Information Act",
      file: "/documents/popia-compliance.pdf"
    }
  ];
  
  // Animation effects
  useEffect(() => {
    // Page elements animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    // Animate sections on scroll
    const sections = [
      certificatesRef.current,
      registrationsRef.current,
      accreditationsRef.current,
      legalDocumentsRef.current
    ];
    
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Animate document cards within each section
      gsap.fromTo(
        section.querySelectorAll('.document-card'),
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);
  
  /**
   * Document Card Component - Displays individual document information
   */
  const DocumentCard = ({ 
    icon, 
    title, 
    subtitle, 
    description, 
    actionIcon, 
    actionText, 
    actionLink 
  }) => {
    return (
      <div className="document-card">
        <div className="document-icon">
          {icon}
        </div>
        <div className="document-info">
          <h3>{title}</h3>
          <p className="document-subtitle">{subtitle}</p>
          <p className="document-description">{description}</p>
        </div>
        {actionLink && (
          <a 
            href={actionLink} 
            className="document-action" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {actionIcon}
            <span>{actionText}</span>
          </a>
        )}
      </div>
    );
  };
  
  return (
    <div ref={pageRef} className="documentation-page">
      <div className="documentation-hero">
        <div className="documentation-hero-content">
          <h1 ref={titleRef}>Documentation & Credentials</h1>
          <p>Certificates, registrations, accreditations, and legal documents</p>
        </div>
      </div>
      
      <div className="documentation-container">
        {/* Medical Certificates Section */}
        <section ref={certificatesRef} className="documentation-section">
          <h2 className="section-title">
            <FaCertificate className="section-icon" />
            Medical Certificates
          </h2>
          <div className="document-grid">
            {certificates.map((cert, index) => (
              <DocumentCard
                key={index}
                icon={<FaCertificate />}
                title={cert.title}
                subtitle={`${cert.issuer} | ${cert.date}`}
                description={cert.description}
                actionIcon={<FaDownload />}
                actionText="Download Certificate"
                actionLink={cert.file}
              />
            ))}
          </div>
        </section>
        
        {/* Professional Registrations Section */}
        <section ref={registrationsRef} className="documentation-section">
          <h2 className="section-title">
            <FaIdCard className="section-icon" />
            Professional Registrations
          </h2>
          <div className="document-grid">
            {registrations.map((reg, index) => (
              <DocumentCard
                key={index}
                icon={<FaIdCard />}
                title={reg.title}
                subtitle={`Number: ${reg.number} | ${reg.date}`}
                description={reg.description}
                actionIcon={<FaExternalLinkAlt />}
                actionText="Verify Registration"
                actionLink={reg.verificationLink}
              />
            ))}
          </div>
        </section>
        
        {/* Accreditations Section */}
        <section ref={accreditationsRef} className="documentation-section">
          <h2 className="section-title">
            <FaFileMedical className="section-icon" />
            Accreditations
          </h2>
          <div className="document-grid">
            {accreditations.map((accred, index) => (
              <DocumentCard
                key={index}
                icon={<FaFileMedical />}
                title={accred.title}
                subtitle={`ID: ${accred.id} | ${accred.date}`}
                description={accred.description}
                actionIcon={<FaExternalLinkAlt />}
                actionText="View Details"
                actionLink="#"
              />
            ))}
          </div>
        </section>
        
        {/* Legal Documents Section */}
        <section ref={legalDocumentsRef} className="documentation-section">
          <h2 className="section-title">
            <FaFileContract className="section-icon" />
            Legal Documents
          </h2>
          <div className="document-grid">
            {legalDocuments.map((doc, index) => (
              <DocumentCard
                key={index}
                icon={<FaFileContract />}
                title={doc.title}
                subtitle={doc.date}
                description={doc.description}
                actionIcon={<FaDownload />}
                actionText="Download Document"
                actionLink={doc.file}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Documentation;