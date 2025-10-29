"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management solution with real-time updates.",
    technologies: ["TypeScript", "Firebase", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Real-time analytics dashboard with predictive capabilities.",
    technologies: ["React", "D3.js", "Python"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Some of my recent work and open-source contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-xl p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <Link 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" /> Code
                </Link>
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> Live
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}