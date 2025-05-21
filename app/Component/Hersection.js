"use client";
import Image from 'next/image';
import { MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import BarLoader from 'react-spinners/BarLoader';
import { catchFile } from '../api/airtable-api';

function Herosection() {
  const [downloading, setIsDownloading] = useState(false);
  const [pdfDownloadFile, setPdfFile] = useState();
  
  const pdfFile = async () => {
    try {
      const response = await catchFile();
      if (!response.error) {
        setPdfFile(response.data);
      }
    } catch (e) {
      console.error('Error fetching resume:', e);
    }
  };
  
  useEffect(() => {
    pdfFile();
  }, []);
  
  const handleDownloadBtn = async (e) => {
    e.preventDefault();
    setIsDownloading(true);
    
    if (!pdfDownloadFile) {
      await pdfFile();
    }
    
    if (pdfDownloadFile) {
      const downloadPdf = document.createElement('a');
      downloadPdf.href = pdfDownloadFile[0];
      downloadPdf.download = 'Ayush_Sharma_Resume.pdf';
      downloadPdf.click();
    }
    
    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="inline-block py-1 px-3 mb-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-sm font-medium">
              Frontend Developer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">Ayush Sharma</span>
            </h1>
            
            <div className="h-12 mb-6">
              <TypeAnimation
                sequence={[
                  'Building web experiences',
                  2000,
                  'Crafting modern interfaces',
                  2000,
                  'Creating responsive designs',
                  2000,
                  'Developing innovative solutions',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-xl md:text-2xl text-gray-300"
              />
            </div>
            
            <p className="text-gray-400 mb-8 max-w-lg">
              I specialize in creating scalable web applications with modern technologies 
              like React, Next.js, and Node.js. Let's build something amazing together.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <button
                onClick={handleDownloadBtn}
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-lg transition-all duration-300 ease-out bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                {downloading ? (
                  <div className="w-24 flex justify-center">
                    <BarLoader color="#FFFFFF" width={100} />
                  </div>
                ) : (
                  <>
                    <span className="mr-2 flex items-center">
                      <MdDownload size={20} />
                    </span>
                    <span>Download CV</span>
                  </>
                )}
              </button>
              
              <a 
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-lg group border border-purple-500 text-white hover:text-white transition-all duration-300"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-to-r from-purple-600 to-blue-500 rounded-full group-hover:w-full group-hover:h-56"></span>
                <span className="relative">Let's Talk</span>
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-all">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-all">
                <FaLinkedin size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-all">
                <FaTwitter size={22} />
              </a>
            </div>
          </div>
          
          {/* Right content - Image with fancy border */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-purple-500 rounded-2xl transform rotate-3 opacity-70"></div>
              <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl transform -rotate-3 opacity-70"></div>
              
              {/* Main image container */}
              <div className="relative w-full pt-[100%] rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                <Image
                  src="/Images/Image-hero.png" 
                  alt="Ayush Sharma"
                  fill
                  className="object-cover object-center"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Tech stack indicators - optional */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <span className="bg-black bg-opacity-70 px-2 py-1 rounded-md text-xs text-white backdrop-blur-sm">React</span>
                  <span className="bg-black bg-opacity-70 px-2 py-1 rounded-md text-xs text-white backdrop-blur-sm">Next.js</span>
                  <span className="bg-black bg-opacity-70 px-2 py-1 rounded-md text-xs text-white backdrop-blur-sm">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;

// Add these to your global CSS
/*

*/