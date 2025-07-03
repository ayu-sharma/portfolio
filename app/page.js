"use client"
import React, { useRef, useState, useEffect, Suspense } from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Hersection from "./Component/Hersection";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";
import Photography from "./Component/Photography";
import Experience from "./Component/Experience";
import Spinner from "./Component/Spinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const herSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const photographyRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const loadAllComponents = async () => {
      try {
        // Simulate loading all components with progress updates
        const loadingSteps = [
          { progress: 15, message: "Loading navigation...", delay: 300 },
          { progress: 25, message: "Loading hero section...", delay: 400 },
          { progress: 35, message: "Loading about section...", delay: 500 },
          { progress: 45, message: "Loading experience...", delay: 400 },
          { progress: 60, message: "Loading projects...", delay: 400 },
          { progress: 75, message: "Loading photography...", delay: 400 },
          { progress: 100, message: "Loading contact...", delay: 300 }
        ];

        for (let i = 0; i < loadingSteps.length; i++) {
          const step = loadingSteps[i];
          setLoadingProgress(step.progress);
          
          // Wait for the specified delay
          await new Promise(resolve => setTimeout(resolve, step.delay));
        }

        // Add a small delay to show 100% completion
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsLoading(false);
        
        // Add a small delay before showing content for smooth transition
        setTimeout(() => {
          setShowContent(true);
        }, 100);
      } catch (error) {
        console.error('Error loading components:', error);
        setIsLoading(false);
        setShowContent(true);
      }
    };

    loadAllComponents();
  }, []);

  const handleNavOptionClick = (option) => {
    switch (option) {
      case "home":
        herSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "works":
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "photography":
        photographyRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        herSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <Spinner progress={loadingProgress} />;
  }

  return (
    <>
      <div 
        className={`relative min-h-screen transition-opacity duration-1000 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full" style={{ zIndex: 10 }}>
          <div className="z-[50] w-full">
            <Navbar handleNavOptionClick={handleNavOptionClick} />
          </div>
        </div>
        <div className="min-h-[100vh] flex flex-col justify-between">
          <div className="bg-[url('/Images/.png')]">
            <div id="hersection" ref={herSectionRef} className="flex flex-col">
              <Suspense fallback={<div className="text-center py-20">Loading Hero Section...</div>}>
                <Hersection />
              </Suspense>
            </div>
          </div>
          <div id="about" ref={aboutRef}>
            <Suspense fallback={<div className="text-center py-20">Loading About Section...</div>}>
              <About />
            </Suspense>
          </div>
          <div id="experience" ref={experienceRef}>
            <Suspense fallback={<div className="text-center py-20">Loading Experience...</div>}>
              <Experience />
            </Suspense>
          </div>
          <div id="works" ref={projectRef}>
            <Suspense fallback={<div className="text-center py-20">Loading Projects...</div>}>
              <Project />
            </Suspense>
          </div>
          <div id="photography" ref={photographyRef}>
            <Suspense fallback={<div className="text-center py-20">Loading Photography...</div>}>
              <Photography />
            </Suspense>
          </div>
          <div id="contact" ref={contactRef}>
            <Suspense fallback={<div className="text-center py-20">Loading Contact...</div>}>
              <Contact />
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
