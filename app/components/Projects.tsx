'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjects } from '../contexts/ProjectsContext';
import { Project } from '../types';
import { FiFolder } from 'react-icons/fi';

const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Sample projects in case the context doesn't return any
  const sampleProjects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      source: "github"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management solution with real-time updates.",
      technologies: ["TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      source: "github"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application with forecasts and interactive maps.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubUrl: "#",
      source: "github"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts.",
      technologies: ["Next.js", "Express", "PostgreSQL"],
      githubUrl: "#",
      source: "github"
    }
  ];

  const displayProjects = projects.length > 0 ? projects : sampleProjects;

  return (
    <section id="projects" className="py-20 bg-[#0f1724] px-4 sm:px-6">
      <div className="container container-flex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6eef6] flex items-center justify-center">
            <FiFolder className="w-4 h-4 mr-3 text-[#a7f3d0] flex-shrink-0" />
            My Projects
          </h2>
          <div className="w-20 h-1 bg-[#a7f3d0] mx-auto mb-6"></div>
          <p className="text-lg text-[#9aa4b2] max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my commitment to clean code, 
            user experience, and scalable solutions.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <motion.div
              className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#a7f3d0]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
            <p className="text-[#9aa4b2] mt-2">Displaying sample projects instead</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#e6eef6]">{project.title}</h3>
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded">
                      {project.source}
                    </div>
                  </div>
                  <p className="text-[#9aa4b2] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-bold"
                      >
                        View Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-bold"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;