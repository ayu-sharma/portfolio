// // Observer-hook.js
// import { useState, useEffect } from 'react';

// function useIntersectionObserver(ref) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 } // Adjust threshold as needed
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref]);

//   return isVisible;
// }

// export default useIntersectionObserver;
import React, { useState } from 'react';
import Image from 'next/image';
import CertificationCard from './Certification'; // Adjust the path as per your project structure

function About() {
  const aboutData = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <div className="grid custom:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex flex-col items-center">
            <div>
              <FaHtml5 className="text-9xl" />
            </div>
            <p>Html</p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <FaCss3Alt className="text-9xl" />
            </div>
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <IoLogoJavascript className="text-9xl" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <SiNextdotjs className="text-9xl" />
            </div>
            <p>NextJS</p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <RiReactjsLine className="text-9xl" />
            </div>
            <p>ReactJS</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Certifications',
      id: 'certifications',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center w-full">
          <CertificationCard
            image="/Images/javascript.jpg"
            alt="JavaScript Certification"
            frontContent={<Image src="/Images/javascript.jpg" alt="JavaScript Certification" width={400} height={400} className="rounded-lg" />}
            backContent={<p className="text-white text-center p-4">JavaScript Certification</p>}
          />
          <CertificationCard
            image="/Images/mern-stack.jpg"
            alt="MERN Stack Certification"
            frontContent={<Image src="/Images/mern-stack.jpg" alt="MERN Stack Certification" width={400} height={400} className="rounded-lg" />}
            backContent={<p className="text-white text-center p-4">MERN Stack Certification</p>}
          />
          <CertificationCard
            image="/Images/ibm.jpg"
            alt="IBM Certification"
            frontContent={<Image src="/Images/ibm.jpg" alt="IBM Certification" width={400} height={400} className="rounded-lg" />}
            backContent={<p className="text-white text-center p-4">IBM Certification</p>}
          />
        </div>
      ),
    },
  ];

  const [selectedTab, setSelectedTab] = useState(aboutData[0].id);

  const handleButtonFunctions = (taskId) => {
    setSelectedTab(taskId);
  };

  return (
    <section className="">
      <div className="">
        <div className="">
          <div className="grid lg:grid-cols-2 custom:grid-cols-1 custom:grid place-items-center lg:items-start lg:gap-10 py-20 lg:px-16">
            <Image
              src="/Images/about-img.jpg"
              style={{ borderRadius: '12px' }}
              alt="Image for about page"
              height={500}
              width={500}
            />
            <div className="mt-4 md:mt-0 lg:text-left flex flex-col h-full lg:items-start">
              <p className="text-black text-4xl font-bold py-5">About Me</p>

              <p className="text-black font-light text-sm pb-10">
                I am a dedicated Frontend Engineer proficient in HTML, CSS, and JavaScript, with
                intermediate-level expertise in ReactJS and Next.js frameworks. Equipped with
                hands-on experience in Tailwind CSS and proficiency in tools like Airtable and
                Postman, I excel at creating dynamic web applications. My commitment to continuous
                learning is reflected in certifications in JavaScript and MERN Stack. With a solid
                academic background from VIT University and a penchant for immersive projects, I am
                poised to make a significant impact in the field of frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills and Certifications */}
      <div className="space-y-4">
        <div className="lg:pt-16 pt-0 pb-10 lg:pb-0 flex flex-col justify-center items-center lg:px-16">
          <div>
            {aboutData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleButtonFunctions(tab.id)}
                className={`mr-4 text-black ${
                  selectedTab === tab.id ? 'border-b-2 border-black ' : ''
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="w-full mb-16">
            {aboutData.map((tab) => (
              <div
                key={tab.id}
                className={`text-black pt-8 flex justify-between items-center ${
                  selectedTab === tab.id ? '' : 'hidden'
                }`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
