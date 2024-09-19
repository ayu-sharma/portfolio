"use client";
import React, { useState } from "react";

const Navbar = ({ handleNavOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveOption(option);
    setIsOpen(false);
    handleNavOptionClick(option); // Call the scroll function
  };

  return (
    <nav className="navbar bg-[#6a6c69] md:bg-[linear-gradient(to_right,_black_33.31%,_rgba(0,0,0,0)_20%)] navbar-expand-md px-7 md:px-14" style={{ zIndex: 10, width: '100%' }}>
      <div className="flex w-full container-fluid justify-between items-center">
        {/* Logo with Flex */}
        <a 
          className="navbar-brand md:text-3xl text-xl font-semibold relative group flex items-center" 
          href="#" 
          onClick={(event) => handleOptionClick("home", event)} // Pass event to prevent default behavior
        >
          <span style={{ color: 'white' }}>PORT</span>
          <span className="md:text-[#d1cfcf] text-yellow-500 ml-1">FOLIO</span>
        </a>

        {/* Toggle for mobile view */}
        <div className='md:hidden flex items-center' style={{ zIndex: 1000, position: 'relative', height: '40px' }}>
            <button onClick={toggleMenu} className="flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 bg-white ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
        </div>

        {/* Navbar Links with Flex */}
        <div className={`navbar-collapse transform transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex md:items-center`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto md:flex md:items-center pt-3"> 
            
            {/* Home Link */}
            <li className="nav-item">
              <a 
                className={`nav-link text-white font-semibold tracking-wide ${activeOption === 'home' ? 'active underline' : ''}`} 
                href="#" 
                onClick={(event) => handleOptionClick("home", event)} // Pass event to prevent default behavior
              >HOME</a>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <a 
                className={`nav-link text-white font-semibold tracking-wide ${activeOption === 'about' ? 'active underline' : ''}`} 
                href="#" 
                onClick={(event) => handleOptionClick("about", event)} // Pass event to prevent default behavior
              >ABOUT</a>
            </li>

            {/* Projects Link */}
            <li className="nav-item">
              <a 
                className={`nav-link text-white font-semibold tracking-wide ${activeOption === 'works' ? 'active underline' : ''}`} 
                href="#" 
                onClick={(event) => handleOptionClick("works", event)} // Pass event to prevent default behavior
              >PROJECTS</a>
            </li>

            {/* Contact Link */}
            <li className="nav-item">
              <a 
                className={`nav-link text-white font-semibold tracking-wide ${activeOption === 'contact' ? 'active underline' : ''}`} 
                href="#" 
                onClick={(event) => handleOptionClick("contact", event)} // Pass event to prevent default behavior
              >CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
