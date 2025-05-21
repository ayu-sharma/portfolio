"use client";

import { motion } from 'framer-motion';
import { JOURNEY_DATA } from '../../constants/about';

const JourneySection = ({ sectionVariants, itemVariants }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="px-4"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Professional Journey
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {JOURNEY_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.organization}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                  {item.achievements && (
                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JourneySection; 