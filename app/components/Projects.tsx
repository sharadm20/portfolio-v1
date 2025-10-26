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
    <section className="px-8 py-20">
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Studio 74 */}
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-lg hover:border-blue-500 transition-all cursor-pointer group">
          <div className="text-4xl font-bold mb-16 text-blue-400 group-hover:scale-110 transition-transform">74</div>
          <div>
            <p className="text-xs tracking-widest mb-1">STUDIO 74</p>
            <div className="w-4 h-0.5 bg-blue-400"></div>
          </div>
        </div>

        {/* Goethe */}
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-lg hover:border-blue-500 transition-all cursor-pointer group">
          <div className="text-5xl font-bold mb-16 text-blue-300 group-hover:scale-110 transition-transform">gö</div>
          <div>
            <p className="text-xs tracking-widest mb-1">GOETHE</p>
            <div className="w-4 h-0.5 bg-blue-400"></div>
          </div>
        </div>

        {/* Lumex Vol.1 */}
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-lg hover:border-blue-500 transition-all cursor-pointer overflow-hidden group">
          <div className="bg-gradient-to-b from-orange-400 via-blue-400 to-blue-600 h-48 -mx-8 -mt-8 mb-4 group-hover:scale-105 transition-transform"></div>
          <div>
            <p className="text-xs tracking-widest mb-1">LUMEX VOL.1</p>
            <div className="w-4 h-0.5 bg-blue-400"></div>
          </div>
        </div>

        {/* Port 3.0 */}
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-lg hover:border-purple-500 transition-all cursor-pointer group">
          <div className="text-4xl font-bold mb-16 text-purple-400 group-hover:scale-110 transition-transform">⟡</div>
          <div>
            <p className="text-xs tracking-widest mb-1">PORT 3.0</p>
            <div className="w-4 h-0.5 bg-purple-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;