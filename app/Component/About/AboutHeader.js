"use client";

import { motion } from 'framer-motion';

const AboutHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-[#1a1a1a] p-1 rounded-full border border-[#2a2a2a] shadow-xl">
        {['about', 'skills', 'certifications','journey'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === tab
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutHeader; 