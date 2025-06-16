"use client";
import Image from 'next/image';
import { MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import BarLoader from 'react-spinners/BarLoader';
import Button from './Button';

function Herosection() {
  const [downloading, setIsDownloading] = useState(false);
  
  const handleDownloadBtn = async (e) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      // Create a link element to download the local PDF file
      const downloadLink = document.createElement('a');
      downloadLink.href = '/data/ayush(resume).pdf';
      downloadLink.download = 'Ayush_Sharma_Resume.pdf';
      downloadLink.click();
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
    
    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-gray-900">
            <div className="inline-block py-1 px-3 mb-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-sm font-medium text-white">
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
                className="text-xl md:text-2xl text-gray-600"
              />
            </div>
            <div className="flex flex-wrap gap-6 mb-12">
              <Button
                onClick={handleDownloadBtn}
                size="sm"
                variant="primary"
                loading={downloading}
                icon={!downloading && <MdDownload size={20} />}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                {downloading ? (
                  <div className="w-24 flex justify-center">
                    <BarLoader color="#FFFFFF" width={100} />
                  </div>
                ) : (
                  "Download CV"
                )}
              </Button>
              
              <Button
                href="#contact"
                variant="outline"
                size="sm"
                className="border-purple-500 text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500"
              >
                Let's Talk
              </Button>
            </div>
            
            <div className="flex items-center gap-6">
              <Button
                href="https://github.com"
                variant="secondary"
                size="sm"
                className="!p-2 bg-transparent"
                icon={<FaGithub size={22} />}
                aria-label="GitHub"
              />
              <Button
                href="https://linkedin.com"
                variant="secondary"
                size="sm"
                className="!p-2 bg-transparent"
                icon={<FaLinkedin size={22} />}
                aria-label="LinkedIn"
              />
              <Button
                href="https://twitter.com"
                variant="secondary"
                size="sm"
                className="!p-2 bg-transparent"
                icon={<FaTwitter size={22} />}
                aria-label="Twitter"
              />
            </div>
          </div>
          
          {/* Right content - Image with fancy border */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-purple-500 rounded-2xl transform rotate-3 opacity-50"></div>
              <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl transform -rotate-3 opacity-50"></div>
              
              {/* Main image container */}
              <div className="relative w-full pt-[100%] rounded-2xl overflow-hidden border-4 border-gray-200 shadow-2xl">
                <Image
                  src="/Images/Image-hero.png" 
                  alt="Ayush Sharma"
                  fill
                  className="object-cover object-center"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Tech stack indicators - optional */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <span className="bg-white/90 px-2 py-1 rounded-md text-xs text-gray-900 backdrop-blur-sm">React</span>
                  <span className="bg-white/90 px-2 py-1 rounded-md text-xs text-gray-900 backdrop-blur-sm">Next.js</span>
                  <span className="bg-white/90 px-2 py-1 rounded-md text-xs text-gray-900 backdrop-blur-sm">Tailwind</span>
                  <span className="bg-white/90 px-2 py-1 rounded-md text-xs text-gray-900 backdrop-blur-sm">Node.js</span>
                  <span className="bg-white/90 px-2 py-1 rounded-md text-xs text-gray-900 backdrop-blur-sm">MongoDB</span>
                  <span className="bg-white/90 px-2 py-1 rounded-md text-xs text-gray-900 backdrop-blur-sm">PostgreSQL</span>
                  <span className="bg-white/90 px-2 py-1 rounded-md text-xs text-gray-900 backdrop-blur-sm">MySQL</span>
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