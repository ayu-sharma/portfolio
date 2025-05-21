"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = ({ sectionVariants, itemVariants }) => {
  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-12 items-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div variants={itemVariants} className="order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hello, I'm a</span>
          <br />Frontend Engineer
        </h1>
        
        <div className="space-y-4 text-gray-400">
          <p>
            I am a dedicated Frontend Engineer proficient in HTML, CSS, and JavaScript, with intermediate-level 
            expertise in ReactJS and Next.js frameworks.
          </p>
          
          <p>
            My technical skills extend to understanding REST API basics, utilizing GitHub for version control, 
            and working with various CSS frameworks such as Tailwind, Bootstrap, and Material UI.
          </p>
          
          <p>
            With a solid academic background from VIT University and a passion for creating immersive digital 
            experiences, I aim to build applications that are not only functional but also delightful to use.
          </p>
        </div>
        
        <div className="mt-8 flex space-x-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 hover:translate-y-[-2px]"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="order-1 md:order-2 relative"
      >
        <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay rounded-2xl"></div>
          <Image 
            src="/Images/about-img.jpg"
            alt="Profile Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] p-4 rounded-2xl shadow-xl border border-gray-800">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 font-medium">Available for hire</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection; 