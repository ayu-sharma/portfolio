"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaPause } from 'react-icons/fa';
import Image from 'next/image';

const ProjectCard = ({ project, hoveredProject, setHoveredProject, playingVideo, handleVideoPlay }) => {
  return (
    <motion.div
      key={project.id}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 }
        }
      }}
      className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Media Container with Overlay */}
      <div className="relative h-72 w-full overflow-hidden">
        {project.fields.video ? (
          <>
            <video
              src={project.fields.video}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              loop
              muted
              playsInline
              autoPlay={playingVideo === project.id}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <button
              onClick={() => handleVideoPlay(project.id)}
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]"
            >
              {playingVideo === project.id ? (
                <FaPause className="text-5xl text-white transform group-hover:scale-110 transition-transform" />
              ) : (
                <FaPlay className="text-5xl text-white transform group-hover:scale-110 transition-transform" />
              )}
            </button>
          </>
        ) : project.fields.image ? (
          <>
            <Image
              src={project.fields.image}
              alt={project.fields.name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <span className="text-6xl text-white/50 transform group-hover:scale-110 transition-transform duration-300">🚀</span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
              {project.fields.name}
            </h3>
            <div className="flex space-x-3">
              {project.fields.url && (
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.fields.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                >
                  <FaGithub className="text-xl text-white" />
                </motion.a>
              )}
              {project.fields.demourl && (
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.fields.demourl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-xl text-white" />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
          {project.fields.description}
        </p>

        {/* Tech Stack Section */}
        {project.fields.technologies && (
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.fields.technologies.split(',').map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {tech.trim()}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default ProjectCard; 