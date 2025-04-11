import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaClock, FaMapMarkedAlt, FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const infoRef = useRef(null);
  const recomedRef = useRef(null);
  
  // Contact information - Updated with Dr. Mohlahlo's correct information
  const phoneNumber = "0732719754";
  const whatsappLink = `https://wa.me/27${phoneNumber.substring(1)}`; // Convert to international format for WhatsApp
  const mapUrl = "https://maps.app.goo.gl/nsjVeRVHC7AGkQju5";
  const emailAddress = "appointments@kennonh.co.za";
  const address = "25 Bethal Street, Modelpark, Emalahleni"; // Updated address
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1794.9230741288854!2d29.2499057!3d-25.8745406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eea958cf37e5689%3A0x6a88a864d88ddbe1!2sMpark%20Kennonh%20Medical%20center.%20Dr%20MOHLAHLO!5e0!3m2!1sen!2sza!4v1744362303294!5m2!1sen!2sza`;
  // RecoMed booking link for Dr. Mohlahlo
  const recomedBookingUrl = "https://www.recomed.co.za/general-practitioner/emalahleni/kenny-mohlahlo/33177/41581/"; // Replace with actual RecoMed URL for Dr. Mohlahlo
  
  // Services list for dropdown - Updated based on general practitioner services
  const services = [
    "General Medical Consultation",
    "Routine Check-up",
    "Preventive Care",
    "Minor Procedures",
    "Chronic Disease Management",
    "Vaccinations",
    "Health Screening",
    "Other (specify in message)"
  ];
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a server
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 5000);
  };
  
  // Animation effects
  useEffect(() => {
    // Page elements animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );
    
    gsap.fromTo(
      [mapRef.current, infoRef.current, recomedRef.current],
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.4, stagger: 0.2, ease: "power2.out" }
    );
  }, []);
  
  return (
    <div ref={pageRef} className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 ref={titleRef}>Contact Us</h1>
          <p>Get in touch with Dr. Kenny Shikwane Mohlahlo</p>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="contact-content">
          {/* RecoMed Online Booking Section */}
          <section ref={recomedRef} className="appointment-form-section">
            <h2>Book Online</h2>
            <div className="booking-card">
              <div className="booking-info">
                <h3>Quick Online Booking</h3>
                <p>Book your appointment instantly with Dr. Mohlahlo's online booking platform</p>
                <a 
                  href={recomedBookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button"
                >
                  Book Now on RecoMed
                </a>
              </div>
            </div>
          </section>
          
          {/* Appointment Form Section */}
          <section ref={formRef} className="appointment-form-section">
            <h2>Book an Appointment</h2>
            
            {formSubmitted ? (
              <div className="form-success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Thank You!</h3>
                <p>Your appointment request has been submitted. We'll contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="appointment-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service Required*</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date*</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formData.date}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="time">Preferred Time*</label>
                      <select 
                        id="time" 
                        name="time" 
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Time</option>
                        <option value="Morning (8:00 - 12:00)">Morning (8:00 - 12:00)</option>
                        <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                        <option value="Evening (16:00 - 19:00)">Evening (16:00 - 19:00)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Submit Appointment Request
                  </button>
                </form>
              </>
            )}
          </section>
          
          {/* Location and Contact Info Section */}
          <div className="contact-info-container">
            <section ref={mapRef} className="location-section">
              <h2>Our Location</h2>
              <div className="map-container">
                {/* Embedded Google Map */}
                <iframe 
                  src={googleMapsEmbedUrl}
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Medical Center Location"
                ></iframe>
              </div>
              
              {/* Doctor information - Simplified */}
              <div className="doctor-info">
                <h3>Dr. Kenny Shikwane Mohlahlo</h3>
                <p className="doctor-title">General Practitioner</p>
                
                <div className="doctor-details">
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <div>
                      <h4>Practice Location</h4>
                      <p>{address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section ref={infoRef} className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="info-card">
                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaWhatsapp className="info-icon" />
                  <div>
                    <h3>WhatsApp</h3>
                    <p><a href={whatsappLink} target="_blank" rel="noopener noreferrer">{phoneNumber}</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h3>Email</h3>
                    <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div>
                    <h3>Hours</h3>
                    <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
