"use client";

import { SKILLS_DATA } from '../../constants/about';

const SkillsSection = ({ hoveredSkill, setHoveredSkill }) => {
  const completedSkills = SKILLS_DATA.filter(skill => skill.status === "completed");
  const learningSkills = SKILLS_DATA.filter(skill => skill.status === "learning");

  const SkillCard = ({ skill }) => (
    <div 
      key={skill.name}
      className="relative group"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-gray-50 group-hover:border-blue-500/50 group-hover:translate-y-[-5px] group-hover:shadow-lg group-hover:shadow-blue-500/10">
        <div className="mb-4 text-6xl">
          <skill.icon className={`${skill.color} transition-transform duration-300 group-hover:scale-110`} />
        </div>
        <p className="font-medium text-gray-600 group-hover:text-gray-900">{skill.name}</p>
      </div>
      
      {hoveredSkill === skill.name && (
        <div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-10 bg-white text-gray-900 text-sm py-2 px-4 rounded-lg shadow-xl border border-gray-200"
        >
          <div className="font-medium mb-1">{skill.name}</div>
          <div className="text-xs text-gray-600">Status: {skill.status === "completed" ? "Completed" : "Learning"}</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="px-4">
      <p className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Technical Expertise
      </p>
      
      {/* Completed Skills Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Completed Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {completedSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      {/* Learning Now Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Learning Now</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {learningSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection; 