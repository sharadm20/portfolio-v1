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
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-wide text-blue-400 mb-2 uppercase">Skills & Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
        </motion.div>

        <div className="grid gap-6 md:gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <span className="text-lg mr-3">{getSkillIcon(category)}</span>
                <h3 className="text-lg font-semibold capitalize text-white">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 rounded-lg px-4 py-2 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400 font-mono bg-slate-800/50 px-2 py-0.5 rounded">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-6">
            Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape.
          </p>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            View My Projects →
          </button>
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