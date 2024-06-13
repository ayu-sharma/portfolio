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
import { BiSolidCertification } from "react-icons/bi";

function About() {
    // const isVisible = useIntersectionObserver();
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
          title: "Education",
          id: "education",
          content: (
            <>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full'>
              <div className='flex flex-col items-center'>
              <FaSchool className='text-9xl' />
                <p>Angels Public School</p>
                </div>

                <div className='flex flex-col items-center'>
                  <FaSchool className='text-9xl'/>
              
                <p>Vellore Institute of Technology(VIT)</p>
                </div>
                </div>
            </>
          ),
        },
        {
          title: "Certifications",
          id: "certifications",
          content: (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
              <div className='flex flex-col items-center'>
              <BiSolidCertification className='text-9xl'/>
              <div>The Complete JavaScript Course 2024: From Zero to Expert!</div>
              </div>
              <div  className='flex flex-col items-center' >
              <BiSolidCertification className='text-9xl'/>
              <div>Introduction to MERN Stack</div>
              </div>
            </div>
          ),
        },
      ];
      

      const [selectedTab, setSelectedTab] = useState(aboutData[0].id);

      const handleButtonFunctions = (taskId) => {
        setSelectedTab(taskId);
        }
        console.log(selectedTab)
      console.log("this is", aboutData["id"])


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
            
            <p className='text-black font-thin text-sm pb-10'>
            I am a dedicated Frontend Engineer proficient in HTML, CSS, and JavaScript, with intermediate-level expertise in ReactJS and Next.js frameworks. Equipped with hands-on experience in Tailwind CSS and proficiency in tools like Airtable and Postman, I excel at creating dynamic web applications. My commitment to continuous learning is reflected in certifications in JavaScript and MERN Stack. With a solid academic background from VIT University and a penchant for immersive projects, I am poised to make a significant impact in the field of frontend development.
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
            key={aboutData.id}
            onClick={() => handleButtonFunctions(tab.id)}
            className={`mr-4 text-black ${selectedTab === tab.id ? ' border-b-2 border-black ' : ''}`}
          >
            {tab.title}
          </button>
        ))}
        </div>
        <div className='w-full mb-16'>
        {aboutData.map((tab) => (
            <div className={`text-black pt-8 flex justify-between items-center ${selectedTab === tab.id ? '' : 'hidden'}`}>
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