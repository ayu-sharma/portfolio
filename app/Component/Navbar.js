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
      className="w-full bg-[#0a0a0a]/80 backdrop-blur-md shadow-md border-b border-[#1a1a1a] px-4 md:px-10 py-2"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <a
          className="text-2xl md:text-3xl font-bold flex items-center gap-1 select-none"
          href="#" 
          onClick={(event) => handleOptionClick("home", event)}
        >
          <span className="text-white">PORT</span>
          <span className="text-blue-500">FOLIO</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-2 lg:gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href="#" 
                onClick={(event) => handleOptionClick(link.id, event)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]
                  ${
                    activeOption === link.id
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
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
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#0a0a0a] shadow-2xl z-50 p-8 flex flex-col gap-6 animate-slide-in">
            <button
              className="self-end mb-4 text-2xl text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                href="#" 
                    onClick={(event) => handleOptionClick(link.id, event)}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                      ${
                        activeOption === link.id
                          ? "bg-blue-500 text-white shadow-md"
                          : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
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
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
