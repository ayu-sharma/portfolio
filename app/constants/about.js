import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { DiNodejs } from "react-icons/di";
import { SiMysql, SiPython, SiMongodb } from "react-icons/si";

export const SKILLS_DATA = [
  {
    icon: FaHtml5,
    name: "HTML5",
    color: "text-orange-500",
    status: "completed"
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
    color: "text-blue-500",
    status: "completed"
  },
  {
    icon: IoLogoJavascript,
    name: "JavaScript",
    color: "text-yellow-400",
    status: "completed"
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-gray-800",
    status: "completed"
  },
  {
    icon: RiReactjsLine,
    name: "React",
    color: "text-blue-400",
    status: "completed"
  },
  {
    icon: DiNodejs,
    name: "Node.js",
    color: "text-green-600",
    status: "learning"
  },
  {
    icon: SiMysql,
    name: "MySQL",
    color: "text-blue-800",
    status: "learning"
  },
  {
    icon: SiPython,
    name: "Python",
    color: "text-blue-500",
    status: "learning"
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "text-green-500",
    status: "learning"
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "text-cyan-500",
    status: "completed"
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

export const EXPERIENCE_DATA = [
  {
    id: 1,
    title: "Frontend Intern",
    company: "Vang Technologies",
    location: "Remote, Bangalore",
    duration: "May 2024 - Aug 2024",
    description: "Developed and maintained the company website with focus on responsive UI, performance, and accessibility. Collaborated within a 3-member team to deliver features ahead of schedule.",
    achievements: [
      "Developed and maintained company website using React.js, Tailwind CSS, and Bootstrap with focus on responsive UI",
      "Collaborated in a 3-member team to deliver frontend ahead of schedule, contributing to UI improvements and domain deployment",
      "Improved website performance and accessibility, achieving a 95+ Lighthouse score in audits"
    ],
    technologies: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript", "Git"]
  },
  {
    id: 2,
    title: "Product Engineer Intern",
    company: "The Curious Parent",
    location: "Remote, Mumbai",
    duration: "Feb 2025 - May 2025",
    description: "Developed a modern podcast platform with dynamic content rendering, analytics, and intuitive UI. Contributed to multi-platform distribution and collaborated on design iterations using Figma.",
    achievements: [
      "Developed a modern, responsive podcast platform using Next.js and Tailwind CSS, implementing dynamic content rendering and audio playback functionality",
      "Engineered a comprehensive podcast distribution system with multi-platform integration, real-time analytics, and an intuitive content management interface",
      "Collaborated with product team to ideate and iterate UI/UX design using Figma wireframes"
    ],
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Figma", "Git"]
  }
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