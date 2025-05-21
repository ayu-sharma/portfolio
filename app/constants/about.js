import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiNextdotjs } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { DiNodejs } from "react-icons/di";
import { SiMysql, SiPython, SiMongodb } from "react-icons/si";

export const SKILLS_DATA = [
  {
    icon: FaHtml5,
    name: "HTML5",
    color: "text-orange-500"
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
    color: "text-blue-500"
  },
  {
    icon: IoLogoJavascript,
    name: "JavaScript",
    color: "text-yellow-400"
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-gray-800"
  },
  {
    icon: RiReactjsLine,
    name: "React",
    color: "text-blue-400"
  },
  {
    icon: DiNodejs,
    name: "Node.js",
    color: "text-green-600"
  },
  {
    icon: SiMysql,
    name: "MySQL",
    color: "text-blue-800"
  },
  {
    icon: SiPython,
    name: "Python",
    color: "text-blue-500"
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "text-green-500"
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: "cloud",
    frontImage: "/Images/cloud-digital.jpg",
    backImage: "/Images/cloud-text.png",
    title: "Google Cloud Certification",
    alt: "Google Cloud Certification Details"
  },
  {
    id: "javascript",
    frontImage: "/Images/javascript.jpg",
    backImage: "/Images/javascript.png",
    title: "JavaScript Certification",
    alt: "JavaScript Certification Details"
  },
  {
    id: "mern",
    frontImage: "/Images/mern-stack.jpg",
    backImage: "/Images/mern.png",
    title: "MERN Stack Certification",
    alt: "MERN Stack Certification Details"
  },
  {
    id: "ibm",
    frontImage: "/Images/ibm.jpg",
    backImage: "/Images/ibm.png",
    title: "IBM Certification",
    alt: "IBM Certification Details"
  }
];

export const JOURNEY_DATA = [
  {
    id: "vang",
    year: "2024",
    title: "Frontend Developer Intern",
    organization: "Vang Technologies",
    description: "Working on modern web applications using React.js and Next.js",
    achievements: [
      "Developing responsive and interactive user interfaces",
      "Implementing state management solutions",
      "Collaborating with the team on feature development",
      "Optimizing application performance"
    ]
  },
  
];

export const ABOUT_TABS = [
  {
    title: "Skills",
    id: "skills"
  },
  {
    title: "Certifications",
    id: "certifications"
  }
]; 