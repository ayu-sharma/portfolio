"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';

const AboutSection = ({ sectionVariants }) => {
  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-12 items-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div className="order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hello, I'm a</span>
          <br />Frontend Engineer
        </h1>
        
        <div className="space-y-4 text-gray-600">
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
          <Button
            href="#contact"
            variant="primary"
            size="sm"
          >
            Contact Me
          </Button>
        </div>
      </motion.div>
      
      <motion.div 
        className="order-1 md:order-2 relative"
      >
        <div className="relative w-full max-w-md mx-auto">
          <Image 
            src="/Images/about-img.png"
            alt="Profile Image"
            width={350}
            height={400}
            className="rounded-2xl"
            loading="lazy"
            priority={false}
            quality={75}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection; 