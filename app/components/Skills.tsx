'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';

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
  const categories = ['languages', 'frontend', 'backend', 'devops', 'tools'];
  const categorizedSkills = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category.toLowerCase() === category.toLowerCase())
  })).filter(category => category.skills.length > 0); // Only include categories that have skills

  return (
    <section id="skills" className="py-20 bg-[#0f1724] px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6eef6] flex items-center justify-center">
            <FiCode className="w-3 h-3 mr-3 text-[#ffd6e0] flex-shrink-0" />
            My Skills
          </h2>
          <div className="w-20 h-1 bg-[#ffd6e0] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorizedSkills.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-[#e6eef6] capitalize">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryGroup.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.1 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;