"use client";
import React, { useState } from "react";
import { NAV_LINKS } from "../constants/navigation";

const Navbar = ({ handleNavOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("home");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option, event) => {
    event.preventDefault();
    setActiveOption(option);
    setIsOpen(false);
    handleNavOptionClick(option);
  };

  return (
    <nav
      className="w-full bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 px-4 md:px-10 py-3"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <a
          className="text-2xl md:text-3xl font-bold flex items-center gap-1 select-none"
          href="#" 
          onClick={(event) => handleOptionClick("home", event)}
        >
          <span className="text-gray-900">PORT</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FOLIO</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-2 lg:gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href="#" 
                onClick={(event) => handleOptionClick(link.id, event)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                  ${
                    activeOption === link.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:text-gray-900"
                  }
                `}
                aria-current={activeOption === link.id ? "page" : undefined}
                tabIndex={0}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 translate-x-4" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-2xl z-50 p-8 flex flex-col gap-6 animate-slide-in">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Menu
              </span>
              <button
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <div className="relative w-6 h-6">
                  <span className="absolute w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full rotate-45"></span>
                  <span className="absolute w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -rotate-45"></span>
                </div>
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href="#" 
                    onClick={(event) => handleOptionClick(link.id, event)}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                      ${
                        activeOption === link.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                          : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:text-gray-900"
                      }
                    `}
                    aria-current={activeOption === link.id ? "page" : undefined}
                    tabIndex={0}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
