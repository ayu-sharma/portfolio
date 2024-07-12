"use client"
import React from 'react'
import useIntersectionObserver from './Observer-hook';
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import Navbar from './Navbar';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaSchool } from "react-icons/fa6";
import { motion } from "framer-motion";
import ReactFlipCard from 'react-card-flip';
import zIndex from '@mui/material/styles/zIndex';


function About() {
    // const isVisible = useIntersectionObserver();
    const[isFlipped1, setIsFlipped1] = useState(true)
    const [isFlipped2, setIsFlipped2] = useState(true)
    const [isFlipped3, setIsFlipped3] = useState(true)
    const [isFlipped4, setIsFlipped4] = useState(true)

    const handleFlipped1 = (e) => {
      e.preventDefault()
      setIsFlipped1(!isFlipped1)
    }
    const handleFlipped2 = (e) => {
      e.preventDefault()
      setIsFlipped2(!isFlipped2)
    }
    const handleFlipped3 = (e) => {
      e.preventDefault()
      setIsFlipped3(!isFlipped3)
    } 
    const handleFlipped4 = (e) => {
      e.preventDefault()
      setIsFlipped4(!isFlipped4)
    }

    const aboutData =  [
        {
          title: "Skills",
          id: "skills",
          content: (
            <div className="grid custom:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
              <div className='flex flex-col items-center'>
              <div><FaHtml5 className='text-12xl text-9xl'/></div>
              <p>Html</p>
              </div>
              <div className='flex flex-col items-center'>
              <div><FaCss3Alt className='text-9xl'/></div>
              <p>CSS</p>
              </div>
              <div className='flex flex-col items-center'>
              <div><IoLogoJavascript className='text-9xl' /></div>
              <p>JavaScript</p>
              </div>
              <div className='flex flex-col items-center'>
              <div><SiNextdotjs className='text-9xl' /></div>
              <p>NextJS</p>
              </div>
              <div className='flex flex-col items-center'>
              <div><RiReactjsLine className='text-9xl' /></div>
              <p>ReactJS</p>
              </div>
            </div>
          ),
        },
        {
          title: "Certifications",
          id: "certifications",
          content: (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-center w-full">
              <div className='flex flex-col items-center'>
              <ReactFlipCard isFlipped={!isFlipped1} flipDirection='horizontal'>
              <Image className='text-9xl cursor-pointer'
               src="/Images/cloud-digital.jpg"
               alt="mern-stack"
               width={400}
               height={400}
               onClick={handleFlipped1}
              />
              <Image className='cursor-pointer border-1'
               src="/Images/cloud-text.png"
               alt='ibm-text'
               width={400}
               height={400}
               onClick={handleFlipped1}
              />
              </ReactFlipCard>
              </div>
              <div className='items-center flex flex-col'>
                <ReactFlipCard isFlipped={!isFlipped2} flipDirection='horizontal'>
              <Image className='text-9xl cursor-pointer'
               src="/Images/javascript.jpg"
               alt="mern-stack"
               width={400}
               height={400}
               onClick={handleFlipped2}
              />
              <Image
              className='cursor-pointer' 
              src="/Images/javascript.png"
              alt='mern-text'
              width={400}
              height={400}
              onClick={handleFlipped2}
              />              
              </ReactFlipCard>
              </div>

              <div className='items-center flex flex-col'>
                <ReactFlipCard isFlipped={!isFlipped3} flipDirection='horizontal' className="">
              <Image className='text-9xl cursor-pointer'
               src="/Images/mern-stack.jpg"
               alt="mern-stack"
               width={400}
               height={400}
               onClick={handleFlipped3}
              />
              <Image
              className='cursor-pointer' 
              src="/Images/mern.png"
              alt='mern-text'
              width={400}
              height={400}
              onClick={handleFlipped3}
              />              
              </ReactFlipCard>
              </div>
              <div className='flex flex-col items-center'>
              <ReactFlipCard isFlipped={!isFlipped4} flipDirection='horizontal'>
              <Image className='text-9xl cursor-pointer'
               src="/Images/ibm.jpg"
               alt="mern-stack"
               width={400}
               height={400}
               onClick={handleFlipped4}
              />
              <Image className='cursor-pointer border-1'
               src="/Images/ibm.png"
               alt='ibm-text'
               width={400}
               height={400}
               onClick={handleFlipped4}
              />
              </ReactFlipCard>
              </div>

              </div>

          ),
        },
      ];
      

      const [selectedTab, setSelectedTab] = useState(aboutData[0].id);

      const handleButtonFunctions = (taskId) => {
        setSelectedTab(taskId);
        }
        // console.log(selectedTab)
      // console.log("this is", aboutData["id"])


  return (
    <section className=''>
    <div className="">
        <div className=''>
            <div className='grid lg:grid-cols-2 custom:grid-cols-1 custom:grid place-items-center lg:items-start lg:gap-10 py-20 lg:px-16'>
            <Image src="/Images/about-img.jpg"
                   style={{borderRadius: "12px"}}
                   alt='Image for about page'
                   height={500}
                   width={500}/>
            <div className='mt-4 md:mt-0 lg:text-left flex flex-col  h-full lg:items-start'>
            <p className='text-black text-4xl font-bold py-5'>
                About Me
            </p>
            
            <p className='text-black font-light text-sm pb-10'>
            I am a dedicated Frontend Engineer proficient in HTML, CSS, and JavaScript, with intermediate-level expertise in ReactJS and Next.js frameworks. I excel at creating dynamic web applications and have hands-on experience in Tailwind CSS, along with proficiency in tools like Airtable and Postman. My technical skills extend to understanding REST API basics, utilizing GitHub for version control, and working with various CSS frameworks such as Tailwind, Bootstrap, and Material UI.<br/>
            My commitment to continuous learning is evidenced by my certifications in JavaScript and MERN Stack, alongside my achievement as a <span className='text-blue-600'><a href='https://www.credly.com/badges/eac99496-0a68-409d-9341-5df989b3173e/public_url' target='_/blank'> Google Cloud Certified Cloud Digital Leader</a></span>. This certification highlights my foundational knowledge of cloud concepts and Google Cloud products, further enhancing my ability to drive digital transformation initiatives.<br />
            With a solid academic background from VIT University and a penchant for immersive projects, I bring a strong combination of technical expertise and a passion for innovation, making me poised to make a significant impact in the field of frontend development.
            </p>
            </div>

            </div>
        
        </div>
    </div>
{/* Skills, Education, Cartification */}

            <div className='space-y-4'>
      <div className="lg:pt-16 pt-0 pb-10 lg:pb-0 flex flex-col justify-center items-center lg:px-16">
        <div className=''>
        {aboutData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleButtonFunctions(tab.id)}
            className={`mr-4 text-black ${selectedTab === tab.id ? ' border-b-2 border-black translate-x-1 scroll-smooth' : ''} transition-all duration-300 ease-in-out`}
          >
            {tab.title}
          </button>
        ))}
        </div>
        <div className='w-full mb-16'>
        {aboutData.map((tab) => (
            <div key={tab.id} className={`text-black pt-8 flex justify-between items-center ${selectedTab === tab.id ? '' : 'hidden'}`}>
                {tab.content}
            </div>
            ))}
            </div>
      </div>
    </div>
    </section>
  )
}

export default About