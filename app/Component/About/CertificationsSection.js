"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Download, Eye } from 'lucide-react';

// Certificate PDF mapping
const CERTIFICATE_PDFS = {
  GoogleCloudDigitalLeader: '/certificates/clouddigital.pdf',
  JavaScript: '/certificates/javascript.pdf',
  IBM: '/certificates/imb.pdf'
};

// Mock certification data
const CERTIFICATIONS_DATA = [
  {
    id: "GoogleCloudDigitalLeader",
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "March 2024",
    description: "Foundational certification in cloud, transformation, analytics, strategy, and innovation.",
    level: "Foundational / Entry-level",
    skills: ["Cloud", "Transformation", "Analytics"],
    credentialId: "61a5f9e82ba0497590d38b21473cc2ab"
  },
  {
    id: "JavaScript",
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    issuer: "Udemy",
    date: "Feb 15, 2024",
    description: "Comprehensive course covering modern JavaScript from fundamentals to advanced concepts, including DOM manipulation, asynchronous JS, and OOP.",
    level: "Intermediate to Advanced",
    skills: ["JavaScript", "DOM Manipulation", "Asynchronous Programming", "ES6+", "OOP"],
    credentialId: "UC-394fc4a4-b2dc-47b4-955b-7c37fc446f2a"
  },
  {
    id: "IBM",
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jun 27, 2024",
    description: "Foundational course introducing the basics of web development, covering HTML, CSS, JavaScript, and responsive design principles.",
    level: "Beginner",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development Basics"],
    credentialId: "go/HlEcmdA48"
  }
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleView = (certId) => {
    const pdfPath = CERTIFICATE_PDFS[certId];
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  };

  const handleDownload = (certId) => {
    const pdfPath = CERTIFICATE_PDFS[certId];
    if (pdfPath) {
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `certificate-${certId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certifications
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-full aspect-square flex flex-col items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
              <Award className="w-10 h-10 mb-3" />
              <span className="text-sm font-bold text-center leading-tight">{cert.title}</span>
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5">
              <Star className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedCert.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Issuer:</span>
                  <span className="font-medium">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{selectedCert.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Level:</span>
                  <span className="font-medium">{selectedCert.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Credential ID:</span>
                  <span className="font-medium text-xs">{selectedCert.credentialId}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button 
                  onClick={() => handleView(selectedCert.id)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </button>
                <button 
                  onClick={() => handleDownload(selectedCert.id)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationsSection;