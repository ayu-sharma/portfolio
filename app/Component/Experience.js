"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { EXPERIENCE_DATA } from '../constants/about';
import ExperienceModal from './ExperienceModal';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollPositionRef = useRef(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Store current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position without any additional scrolling
      const scrollY = scrollPositionRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Immediately restore position without animation
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: 'instant'
      });
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      const scrollY = scrollPositionRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY > 0) {
        window.scrollTo({
          top: scrollY,
          left: 0,
          behavior: 'instant'
        });
      }
    };
  }, [isModalOpen]);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
    
    // Prevent any automatic scrolling after modal closes
    setTimeout(() => {
      const currentScrollY = scrollPositionRef.current;
      if (currentScrollY !== window.scrollY) {
        window.scrollTo(0, currentScrollY);
      }
    }, 10);
  };

  return (
    <div className="bg-gray-100 text-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Minimal Header */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h1>

        {/* Minimal Experience List */}
        <div className="space-y-4">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCardClick(exp)}
              className="bg-white/60 shadow-sm hover:shadow-lg rounded-lg p-4 border border-gray-300 cursor-pointer hover:scale-105 transition-all duration-300 transform"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <FaBriefcase className="text-blue-600 text-sm mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">
                      {exp.title}
                    </h3>
                    <p className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-sm font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
        </motion.div>
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Experience;