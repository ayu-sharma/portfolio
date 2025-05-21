"use client";

import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../constants/about';

const SkillsSection = ({ sectionVariants, itemVariants, hoveredSkill, setHoveredSkill }) => {
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
        Technical Expertise
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {SKILLS_DATA.map((skill) => (
          <motion.div 
            variants={itemVariants}
            key={skill.name}
            className="relative group"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-[#2a2a2a] group-hover:border-blue-500/50 group-hover:translate-y-[-5px] group-hover:shadow-lg group-hover:shadow-blue-500/10">
              <div className="mb-4 text-6xl">
                <skill.icon className={`${skill.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <p className="font-medium text-gray-400 group-hover:text-white">{skill.name}</p>
            </div>
            
            {hoveredSkill === skill.name && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-10 bg-[#2a2a2a] text-white text-sm py-2 px-4 rounded-lg shadow-xl"
              >
                <div className="font-medium mb-1">{skill.name}</div>
                <div className="text-xs text-gray-400">Experience: {skill.experience || "Intermediate"}</div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection; 