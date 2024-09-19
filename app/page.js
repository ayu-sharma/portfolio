"use client"
import React, { useRef } from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Hersection from "./Component/Hersection";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";

export default function Home() {
  const herSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavOptionClick = (option) => {
    switch (option) {
      case "home":
        herSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "works":
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        herSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative min-h-screen">
        <div className="w-full" style={{ zIndex: 10 }}>
          <div className="fixed z-10 w-full">
            <Navbar handleNavOptionClick={handleNavOptionClick} />
          </div>
        </div>
        <div className="min-h-[100vh] flex flex-col justify-between">
          <div className="bg-[url('/Images/.png')]">
            <div id="hersection" ref={herSectionRef} className="flex flex-col">
              <Hersection />
            </div>
          </div>
          <div id="about" ref={aboutRef}>
            <About />
          </div>
          <div id="works" ref={projectRef}>
            <Project />
          </div>
          <div id="contact" ref={contactRef}>
            <Contact />
          </div>
          <div>
            {/* <Footer className="absolute b-0 w-full" /> */}
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}
