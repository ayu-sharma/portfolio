"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AboutHeader from './AboutHeader';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import JourneySection from './JourneySection';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [visibleCert, setVisibleCert] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleCertClick = (certId) => {
    setVisibleCert(certId);
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection sectionVariants={sectionVariants} itemVariants={itemVariants} />;
      case 'skills':
        return <SkillsSection sectionVariants={sectionVariants} itemVariants={itemVariants} />;
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
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16">
      <div className="max-w-7xl mx-auto">
        <AboutHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-12">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default About; 