"use client"

import { useState } from 'react'
import { motion } from 'framer-motion';
import AboutHeader from './About/AboutHeader';
import AboutSection from './About/AboutSection';
import SkillsSection from './About/SkillsSection';
import CertificationsSection from './About/CertificationsSection';
import JourneySection from './About/JourneySection';

function About() {
  // State for animation and interactions
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [visibleCert, setVisibleCert] = useState(null);
  
  // Section transition variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Handle certificate popup
  const handleCertClick = (id) => {
    setVisibleCert(visibleCert === id ? null : id);
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection sectionVariants={sectionVariants} itemVariants={itemVariants} />;
      case 'skills':
        return (
          <SkillsSection 
            sectionVariants={sectionVariants} 
            itemVariants={itemVariants}
            hoveredSkill={hoveredSkill}
            setHoveredSkill={setHoveredSkill}
          />
        );
      case 'certifications':
        return (
          <CertificationsSection
            sectionVariants={sectionVariants}
            itemVariants={itemVariants}
            visibleCert={visibleCert}
            handleCertClick={handleCertClick}
          />
        );
      case 'journey':
        return <JourneySection sectionVariants={sectionVariants} itemVariants={itemVariants} />;
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-white text-gray-900 py-16">
      <div className="container mx-auto px-4">
        <AboutHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="max-w-6xl mx-auto mt-12">
          {renderSection()}
        </div>
      </div>
    </section>
  )
}

export default About