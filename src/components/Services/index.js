import React from 'react';
import ServicesHero from './sections/ServicesHero';
import ServicesList from './sections/ServicesList';

/**
 * Services component - Main component for the Services page
 * This component combines different sections to create the complete Services page
 */
const Services = () => {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesList />
      {/* TeamSection has been removed as requested */}
    </div>
  );
};

export default Services;
