"use client";
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group aspect-square bg-gray-100 overflow-hidden rounded-lg shadow hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Badge */}
      <div className="absolute top-2 right-2 z-10">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          project.status === 'completed' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {project.status === 'completed' ? 'Completed' : 'Pending'}
        </span>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      {/* Overlay on hover */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <div className="flex gap-4 mb-2">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              className="!p-3 !rounded-full"
              onClick={() => window.open(project.github, '_blank')}
              icon={<Github className="w-6 h-6" />}
            />
          )}
          {project.demo && (
            <Button
              variant="outline"
              size="sm"
              className="!p-3 !rounded-full"
              onClick={() => window.open(project.demo, '_blank')}
              icon={<ExternalLink className="w-6 h-6" />}
            />
          )}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          <p className="text-xs text-gray-200 mt-1">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
