"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CERTIFICATIONS_DATA } from '../../constants/about';

const CertificationsSection = ({ sectionVariants, itemVariants, visibleCert, handleCertClick }) => {
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
        Certifications & Achievements
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CERTIFICATIONS_DATA.map((cert) => (
          <motion.div 
            variants={itemVariants}
            key={cert.id}
            className="relative h-[320px]"
          >
            <div 
              className="cursor-pointer bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-5px] h-full flex flex-col"
              onClick={() => handleCertClick(cert.id)}
            >
              <div className="relative h-48 w-full flex-shrink-0">
                <Image 
                  src={cert.frontImage}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-white line-clamp-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-1">{cert.issuer || "Certification Authority"}</p>
                </div>
              </div>
            </div>
            
            {/* Certificate Popup */}
            {visibleCert === cert.id && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
                onClick={() => handleCertClick(null)}
              >
                <div 
                  className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-96 w-full">
                    <Image 
                      src={cert.backImage}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-gray-400">{cert.description || "Professional certification validating expertise and knowledge in the field."}</p>
                    <div className="mt-6 flex justify-between">
                      <a 
                        href={cert.credentialUrl || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        View Credential
                      </a>
                      <button 
                        onClick={() => handleCertClick(null)}
                        className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors text-white"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificationsSection; 