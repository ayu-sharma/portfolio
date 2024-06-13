"use client"
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Hersection from "./Component/Hersection";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";
import React, { useEffect, useRef, useState } from "react";



export default function Home() {
  const [selectedOption, setSelectedOption] = useState("hersection");

  const handleNavOptionClick = (option) => {
    setSelectedOption(option);
  };
  // console.log("otion is selected")
  return (
    <>
      <div className="relative min-h-screen">
      <div className="fixed w-full">
          <div className="">
            <Navbar handleNavOptionClick={handleNavOptionClick} />
          </div>
        </div>
        <div className="min-h-[100vh] flex flex-col justify-between">
    <div className="bg-[url('/Images/.png')] py-4 px-4 ">
    <div id="hersection">
    {selectedOption === "hersection" && <Hersection />}
   </div>
   <div id="about">
   {selectedOption === "about" && <About />}
   </div>
   <div id="project">
   {selectedOption === "projects" && <Project />}
   </div>
   <div id="contact">
   {selectedOption === "contact" && <Contact />}
   </div>
   </div>
   <div>
    <Footer className= "absolute b-0 w-full" />
   </div>
   </div>
   </div>
    </>
  );
}
