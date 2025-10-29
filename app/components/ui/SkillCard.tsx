'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiCpu, FiLayers } from 'react-icons/fi';
import { Card, CardContent } from './Card';

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  index?: number;
}

const getIconForCategory = (category: string) => {
  switch(category.toLowerCase()) {
    case 'languages':
      return <FiCode className="text-yellow-400" />;
    case 'frontend':
      return <FiZap className="text-blue-400" />;
    case 'backend':
      return <FiCpu className="text-green-400" />;
    case 'devops':
      return <FiLayers className="text-purple-400" />;
    case 'tools':
      return <FiLayers className="text-orange-400" />;
    case 'ai':
      return <FiCpu className="text-purple-400" />;
    case 'cloud':
      return <FiZap className="text-green-400" />;
    default:
      return <FiCode className="text-gray-400" />;
  }
};

const getCategoryColor = (category: string) => {
  switch(category.toLowerCase()) {
    case 'languages':
      return 'from-yellow-500/20 to-yellow-600/20';
    case 'frontend':
      return 'from-blue-500/20 to-blue-600/20';
    case 'backend':
      return 'from-green-500/20 to-green-600/20';
    case 'devops':
      return 'from-purple-500/20 to-purple-600/20';
    case 'tools':
      return 'from-orange-500/20 to-orange-600/20';
    case 'ai':
      return 'from-purple-500/20 to-pink-600/20';
    case 'cloud':
      return 'from-blue-500/20 to-cyan-600/20';
    default:
      return 'from-gray-500/20 to-gray-600/20';
  }
};

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  level,
  category,
  index = 0,
}) => {
  return (
    <Card 
      className={`h-full bg-gradient-to-br ${getCategoryColor(category)}`}
    >
      <CardContent>
        <div className="flex items-center mb-3">
          <div className="mr-3 text-xl">
            {getIconForCategory(category)}
          </div>
          <h3 className="text-lg font-bold text-white dark:text-[#e6eef6]">{name}</h3>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
          <motion.div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut"
            }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-300">
          <span>{level}%</span>
          <span className="capitalize">{category}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;