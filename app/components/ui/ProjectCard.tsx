'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import { Card, CardContent, CardFooter } from './Card';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  index = 0,
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white dark:text-[#e6eef6] flex items-center">
            <FiCode className="mr-2 text-blue-400" /> {title}
          </h3>
          <div className="flex space-x-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-300 dark:text-[#9aa4b2] mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-800/50 border-t border-gray-700">
        <div className="flex justify-between">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center transition-colors"
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center transition-colors ml-auto"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;