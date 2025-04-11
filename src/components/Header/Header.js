import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const hamburgerRef = useRef(null);
  const mobileNavRef = useRef(null);
  
  // Initialize GSAP animations
  useEffect(() => {
    // Initial animations
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
    
    gsap.fromTo(
      navItemsRef.current,
      { opacity: 0, y: -10 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4, 
        stagger: 0.1,
        ease: "power1.out" 
      }
    );
    
    // Header scroll animation (will be triggered by scroll event)
    gsap.set(headerRef.current, { 
      clearProps: "all" 
    });
  }, []);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        if (!scrolled) {
          setScrolled(true);
          gsap.to(headerRef.current, {
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            height: '70px',
            duration: 0.3,
            ease: "power2.out"
          });
        }
      } else {
        if (scrolled) {
          setScrolled(false);
          gsap.to(headerRef.current, {
            backgroundColor: 'var(--pure-white)',
            boxShadow: 'var(--shadow-sm)',
            height: '80px',
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Toggle mobile menu with GSAP animation - memoized with useCallback
  const toggleMenu = useCallback(() => {
    if (!menuOpen) {
      // Open menu animation
      setMenuOpen(true);
      gsap.to(mobileNavRef.current, {
        right: 0,
        duration: 0.5,
        ease: "power3.out"
      });
      
      // Animate navigation items
      gsap.fromTo(
        mobileNavRef.current.querySelectorAll('li'),
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.3, 
          stagger: 0.1,
          delay: 0.2,
          ease: "back.out" 
        }
      );
    } else {
      // Close menu animation
      gsap.to(mobileNavRef.current, {
        right: '-100%',
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => setMenuOpen(false)
      });
    }
  }, [menuOpen]); // Add menuOpen as a dependency

  // Close menu when clicking outside on mobile
  useEffect(() => {
    if (menuOpen) {
      const closeMenu = (e) => {
        if (!mobileNavRef.current.contains(e.target) && !hamburgerRef.current.contains(e.target)) {
          toggleMenu();
        }
      };
      
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener('click', closeMenu);
    }
  }, [menuOpen, toggleMenu]);

  return (
    <header ref={headerRef} className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <h1 ref={logoRef} className="logo-text">KENNONH</h1>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {['HOME', 'ABOUT', 'SERVICES', 'CONTACT', 'DOCUMENTATION'].map((item, index) => (
              <li key={index} ref={el => navItemsRef.current[index] = el}>
                <Link to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="mobile-nav-container">
          <button 
            ref={hamburgerRef}
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </button>
          
          <div 
            ref={mobileNavRef}
            className={`mobile-nav ${menuOpen ? 'open' : ''}`} 
            onClick={e => e.stopPropagation()}
          >
            <nav>
              <ul>
                <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>SERVICES</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>CONTACT</Link></li>
                <li><Link to="/documentation" onClick={toggleMenu}>DOCUMENTATION</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
