"use client";
import React, { useState, useRef, useEffect  } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

const animationHam = "https://lottie.host/2734f832-21f3-4d2a-8cf6-5e2be4ba2a97/sgqeU7NH1t.json"
function Navbar({ handleNavOptionClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("hersection");
  const navRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleOptionClick = (option) => {
    handleNavOptionClick(option);
    setActiveOption(option); 
    toggleMenu(); 
    setIsOpen();
  };

  // const handleClickOutside = (event) => {
  //   console.log("Document clicked");
  //   if (navRef.current && !navRef.current.contains(event.target)) {
  //     console.log("Clicked outside, closing menu");  // Log to help debug
  //     setIsOpen(false);
  //   } else {
  //     console.log("Clicked inside the navbar");
  //   }
  // };
  // useEffect(() => {
  //   console.log("Adding event listener");
  //   window.document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     console.log("Removing event listener");
  //     window.document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg px-7 lg:px-14" style={{ zIndex: 1000, position: 'fixed', width: '100%' }}>
      <div className="container-fluid">
    {/* <div classNameName='py-6 px-16 bg-[#white] top-0 left-0 z-50 shadow' style={{ width: '100%' }}> */}
    <a className="navbar-brand lg:text-3xl text-xl font-semibold md:mr-10" href="#" onClick={() => handleOptionClick("hersection")}>PortFolio</a>
      <div classNameName='lg:hidden flex justify-end'>
      <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
</div>

<div className={`navbar-collapse transform transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} mx-auto justify-between`} id="navbarSupportedContent">
<ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => handleOptionClick("hersection")}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleOptionClick("about")}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"onClick={() => handleOptionClick("projects")}>Projects</a>
        </li>
        <li className="nav-itrm">
          <a className="nav-link" href="#" onClick={() => handleOptionClick("contact")}>
            Contact
          </a>
        </li>
      </ul>
      <Tooltip>
              <IconButton sx={{ p: 0 }} title='Ayush Sharma'>
                <Avatar alt="Ayush Sharma" src="/Images/mypic.jpg" />
              </IconButton>
            </Tooltip>
</div>
      
      </div>
    </nav>
    
  );
}

export default Navbar;
