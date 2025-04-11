import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add safety mechanism for GSAP animations
const ensureVisibility = () => {
  // If page is being hidden (user navigating away) or window is being unloaded,
  // make sure all animated elements are visible
  const resetElements = () => {
    document.querySelectorAll('.gsap-animated, .card, .section-title, .section-subtitle, .btn')
      .forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.transform = 'none';
      });
  };

  // Run on page visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      resetElements();
    }
  });

  // Run on page unload
  window.addEventListener('beforeunload', resetElements);

  // Safety timeout - if any element gets stuck with opacity 0, reset after 8 seconds
  setTimeout(() => {
    document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
      el.style.opacity = '1';
    });
  }, 8000);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call our safety function after render
ensureVisibility();

reportWebVitals();
