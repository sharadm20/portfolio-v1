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
    <section id="projects" className="px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-wide text-blue-400 mb-2 uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            A showcase of my recent work from GitHub and GitLab repositories
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={`${project.source}-${project.id}`}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs rounded-md font-medium ${
                        project.source === 'github'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-orange-900/50 text-orange-300'
                      }`}>
                        {project.source === 'github' ? 'GitHub' : 'GitLab'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.gitlabUrl && (
                      <a
                        href={project.gitlabUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.955 13.587l-1.342-4.135-2.664-8.202c-.053-.161-.417-.161-.47 0L16.815 9.45H7.185L4.52 1.25c-.053-.161-.417-.161-.47 0L1.345 9.45.003 13.587c-.047.161.064.345.21.345h4.17c.141 0 .257.115.257.257v7.585c0 .141.115.257.257.257h13.23c.141 0 .257-.116.257-.257v-7.585c0-.142.116-.257.257-.257h4.17c.146 0 .257-.184.21-.345z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description || 'No description available'}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-md border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-slate-700/50 text-gray-400 rounded-md border border-slate-600/50">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group/demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Demo
                    <svg className="w-4 h-4 group-hover/demo:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {projects.length === 0 && !loading && !error && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-4xl mb-4">📁</div>
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400 text-sm">Projects will appear here once fetched from GitHub and GitLab.</p>
          </motion.div>
        )}

        {projects.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Projects →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;