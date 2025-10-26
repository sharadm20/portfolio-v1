'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjects } from '../contexts/ProjectsContext';

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold">My Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Here are some of my recent projects from GitHub and GitLab
            </p>
          </motion.div>
          <div className="flex justify-center">
            <motion.div
              className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold">My Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Here are some of my recent projects from GitHub and GitLab
            </p>
          </motion.div>
          <motion.div
            className="text-center text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {error}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.source}-${project.id}`}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-500"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-3">
                      <span className="text-white text-lg">
                        {project.source === 'github' ? '🐱' : '🔷'}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {project.source}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">🐙</span>
                      <span className="font-medium">Code</span>
                    </motion.a>
                  )}
                  {project.gitlabUrl && (
                    <motion.a
                      href={project.gitlabUrl}
                      className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">🔷</span>
                      <span className="font-medium">GitLab</span>
                    </motion.a>
                  )}
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">🚀</span>
                      <span className="font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {projects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
              <span className="text-4xl">📁</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Projects Found</h3>
            <p className="text-gray-600 dark:text-gray-400">Please check your GitHub/GitLab username configuration.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;