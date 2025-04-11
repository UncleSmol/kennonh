import React, { forwardRef } from 'react';

/**
 * TeamMemberCard component - Displays information about a medical team member
 * 
 * @param {Object} props - Component props
 * @param {Object} props.member - Member data object
 * @param {string} props.member.name - Member's name
 * @param {string} props.member.title - Member's job title
 * @param {string} props.member.specialty - Member's medical specialty
 * @param {string} props.member.experience - Member's experience description
 * @param {string} props.member.education - Member's education details
 * @param {string} [props.member.imageUrl] - Optional URL to member's image
 * @param {React.Ref} ref - Forwarded ref for animations
 */
const TeamMemberCard = forwardRef(({ member, className = '', ...props }, ref) => {
  const { name, title, specialty, experience, education, imageUrl } = member;
  
  return (
    <div className={`team-member-card ${className}`} ref={ref} {...props}>
      <div className="member-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={`${name} - ${title}`} className="member-image" />
        ) : (
          <div className="member-image-placeholder">
            <span>{name.split(' ').map(n => n[0]).join('')}</span>
          </div>
        )}
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p className="member-title">{title}</p>
        <div className="member-details">
          <p>
            <strong>Specialty:</strong> {specialty}
          </p>
          <p>
            <strong>Experience:</strong> {experience}
          </p>
          <p>
            <strong>Education:</strong> {education}
          </p>
        </div>
      </div>
    </div>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

export default TeamMemberCard;