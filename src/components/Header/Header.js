import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ReactComponent as Logo } from '../../sig/dev-doc-logo.svg';
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
  const snapScanRef = useRef(null);
  const footerLogoRef = useRef(null);
  
  // SnapScan URL
  const snapScanUrl = "https://pos.snapscan.io/qr/2NVLQ-7p";
  
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
    
    gsap.fromTo(
      snapScanRef.current,
      { opacity: 0, y: -10 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        delay: 0.5,
        ease: "power1.out" 
      }
    );
    
    if (menuOpen && footerLogoRef.current) {
      gsap.fromTo(
        footerLogoRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 0.6, 
          y: 0, 
          duration: 0.5,
          delay: 0.8,
          ease: "power1.out" 
        }
      );
    }
    
    // Header scroll animation (will be triggered by scroll event)
    gsap.set(headerRef.current, { 
      clearProps: "all" 
    });
  }, [menuOpen]);
  
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
        
        {/* SnapScan Payment Link - Desktop */}
        <div ref={snapScanRef} className="snapscan-container">
          <a 
            href={snapScanUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Pay with SnapScan
          </a>
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
                {/* SnapScan Payment Link - Mobile - now matches other nav links style */}
                <li>
                  <a 
                    href={snapScanUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    PAY WITH SNAPSCAN
                  </a>
                </li>
              </ul>
              
              {/* Footer Logo */}
              <div className="mobile-nav-footer">
                <a 
                  href="https://unclesmol.github.io/dev-doc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-logo-link"
                >
                  <Logo ref={footerLogoRef} className="footer-logo" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
