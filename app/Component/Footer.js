import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Image 
              src="/Images/logo.png" 
              alt='footer image' 
              width={100} 
              height={100} 
              className='w-8 h-8'
            />
            <span className="text-lg font-bold text-gray-900">
              Ayush Sharma
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/ayush-sharma-7a88a3274/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://github.com/ayushsharma2003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer