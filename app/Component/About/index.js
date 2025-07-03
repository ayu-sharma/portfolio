"use client";

import { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import AboutHeader from './AboutHeader';

// Lazy load sections
const AboutSection = lazy(() => import('./AboutSection'));
const SkillsSection = lazy(() => import('./SkillsSection'));
const CertificationsSection = lazy(() => import('./CertificationsSection'));
const JourneySection = lazy(() => import('./JourneySection'));


const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [visibleCert, setVisibleCert] = useState(null);

  // Simplified animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const handleCertClick = (certId) => {
    setVisibleCert(certId);
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection sectionVariants={sectionVariants} />;
      case 'skills':
        return <SkillsSection sectionVariants={sectionVariants} />;
      case 'certifications':
        return (
          <CertificationsSection
            sectionVariants={sectionVariants}
            visibleCert={visibleCert}
            handleCertClick={handleCertClick}
          />
        );
      case 'journey':
        return <JourneySection sectionVariants={sectionVariants} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16">
      <div className="max-w-7xl mx-auto">
        <AboutHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-12">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            {renderSection()}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default About; 