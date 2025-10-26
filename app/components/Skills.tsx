'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl">{getSkillIcon(skill.category)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {skill.category}
                  </span>
                  <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Function to return appropriate emoji based on category
const getSkillIcon = (category: string) => {
  switch(category.toLowerCase()) {
    case 'frontend':
      return '💻';
    case 'backend':
      return '⚙️';
    case 'database':
      return '📊';
    case 'devops':
      return '🔄';
    case 'languages':
      return '🌐';
    case 'tools':
      return '🛠️';
    default:
      return '⚡';
  }
};

export default Skills;