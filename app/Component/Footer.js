import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Image 
                src="/Images/portfolio.png" 
                alt='footer image' 
                width={100} 
                height={100} 
                className='w-12 h-12 hover:scale-110 transition-transform duration-300'
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ayush Sharma
              </span>
            </div>
            <p className="text-sm text-gray-500">
              A passionate Frontend Developer crafting beautiful and functional web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MdEmail className="text-blue-400 text-xl" />
                <a href="mailto:contactayusharma@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  contactayusharma@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-blue-400 text-xl" />
                <span className="text-gray-400">Himachal Pradesh, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2024 Ayush Sharma. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/ayush-sharma-7a88a3274/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://github.com/ayushsharma2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer