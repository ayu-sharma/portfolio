"use client";

import { motion } from 'framer-motion';

const AboutHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-100 p-1 rounded-full border border-gray-200 shadow-lg">
        {['about', 'skills', 'certifications'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-600 to-blue-500  text-white shadow-lg shadow-blue-500/30"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
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