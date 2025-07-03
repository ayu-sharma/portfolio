"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

const ExperienceModal = ({ experience, isOpen, onClose }) => {
  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-200">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <FaTimes className="text-xl md:text-2xl" />
              </button>
              
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-3 rounded-lg">
                  <FaBriefcase className="text-white text-lg md:text-xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {experience.title}
                  </h2>
                  <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    {experience.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(85vh-200px)] hide-scrollbar">
              {/* Location and Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaMapMarkerAlt className="text-purple-500" />
                  <span className="text-sm md:text-base">{experience.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaCalendarAlt className="text-blue-500" />
                  <span className="text-sm md:text-base font-medium">{experience.duration}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm md:text-base text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm md:text-base rounded-lg font-medium border border-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200 text-sm md:text-base"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal; 