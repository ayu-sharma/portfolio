"use client"
import React from 'react'
import { getProjects } from '../api/airtable-api';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spinner from './Spinner';
import ProjectCard from './ProjectCard';

function Project() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const enterProjects = async() => {
    setIsLoading(true);
    try {
      const result = await getProjects(); 
      setProjects(result.data.records || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    enterProjects();
  }, []);

  const handleVideoPlay = (projectId) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Spinner />
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects?.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  hoveredProject={hoveredProject}
                  setHoveredProject={setHoveredProject}
                  playingVideo={playingVideo}
                  handleVideoPlay={handleVideoPlay}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Project;