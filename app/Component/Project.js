"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/projects";
import Button from "./Button";

const PAGE_SIZE = 3;

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Filtered projects
  const filtered = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Projects to show
  const visibleProjects = filtered.slice(0, visibleCount);

  // Show Load More if there are more projects to show
  const canLoadMore = visibleCount < filtered.length;
  // Show Show Less if more than PAGE_SIZE are shown
  const canShowLess = visibleCount > PAGE_SIZE;

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl font-bold">Projects</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={project.id || idx} project={project} />
        ))}
      </div>

      {/* Load More & Show Less Buttons */}
      {(canLoadMore || canShowLess) && (
        <div className="flex justify-center gap-4">
          {canLoadMore && (
            <Button
              onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
              variant="primary"
              size="sm"
            >
              LOAD MORE
            </Button>
          )}
          {canShowLess && (
            <Button
              onClick={() => setVisibleCount(PAGE_SIZE)}
              variant="secondary"
              size="sm"
            >
              SHOW LESS
            </Button>
          )}
        </div>
      )}
    </section>
  );
}