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
  return (
    <section className="px-8 py-20">
      <div className="text-xs tracking-[0.3em] text-blue-400 mb-4">+ SKILLS</div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-cyan-500 to-blue-900 rounded-lg overflow-hidden mb-8 hover:scale-[1.02] transition-transform cursor-pointer">
          <div className="h-96 flex items-center justify-center">
            <div className="text-6xl font-bold">SM</div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs tracking-widest text-gray-400 mb-4">SHARAD MISHRA</p>
          <h2 className="text-5xl font-serif mb-6">Full-Stack Developer</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            Crafting exceptional digital experiences with modern technologies and innovative solutions.
          </p>
          <button className="border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-all">
            VIEW WORK →
          </button>
        </div>
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