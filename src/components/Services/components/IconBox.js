import React, { forwardRef } from 'react';
import '../styles/IconBox.css';

/**
 * IconBox component displays an icon with descriptive text
 * 
 * @param {Object} props - Component props
 * @param {string} props.icon - FontAwesome icon class (without 'fas' prefix)
 * @param {string} props.text - Text to display below the icon
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref for animations
 */
const IconBox = forwardRef(({ icon, text, className = '', ...props }, ref) => {
  return (
    <div 
      ref={ref}
      className={`icon-box ${className}`}
      {...props}
    >
      <i className={`fas ${icon}`}></i>
      <span>{text}</span>
    </div>
  );
});

IconBox.displayName = 'IconBox';

export default IconBox;