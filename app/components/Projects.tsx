'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="card p-6 hover:shadow-xl transition-all duration-300 group"
    >
      {/* Project Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <CodeBracketIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            {project.language && (
              <p className="text-sm text-muted-foreground">{project.language}</p>
            )}
          </div>
        </div>

        {/* Star Count */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <StarIcon className="w-4 h-4" />
          <span>{project.stargazers_count}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 line-clamp-2 min-h-[3rem]">
        {project.description || 'No description available'}
      </p>

      {/* Topics/Tags */}
      {project.topics && project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {topic}
            </span>
          ))}
          {project.topics.length > 4 && (
            <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              +{project.topics.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto pt-4 border-t">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <CodeBracketIcon className="w-4 h-4" />
          Code
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // Replace with your GitHub username or get from env
      const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'sharadm20';
      
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }

      const data = await response.json();

      // Filter out forks and archived repos, sort by stars
      const filteredProjects = data
        .filter((repo: Project) => !repo.archived)
        .sort((a: Project, b: Project) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6); // Get top 6 projects

      setProjects(filteredProjects);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Get unique languages for filter
  const languages = ['all', ...new Set(projects.map(p => p.language).filter(Boolean))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.language === filter);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my recent work and open-source contributions. 
          Each project showcases different skills and technologies.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === lang
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {lang === 'all' ? 'All' : lang}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"
            />
            <p className="mt-4 text-muted-foreground">Loading projects...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto card p-8">
              <p className="text-destructive mb-4">⚠️ {error}</p>
              <button
                onClick={fetchProjects}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No projects found for this filter.</p>
              </div>
            )}

            {/* View More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-12"
            >
              <a
                href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'sharadm20'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View All Projects on GitHub
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}