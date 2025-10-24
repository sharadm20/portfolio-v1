import React from 'react';
import { useProjects } from '../contexts/ProjectsContext';

const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">My Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Here are some of my recent projects from GitHub and GitLab
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">My Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Here are some of my recent projects from GitHub and GitLab
            </p>
          </div>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">My Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Here are some of my recent projects from GitHub and GitLab
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={`${project.source}-${project.id}`} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-2">
                    {project.source === 'github' ? '🐱' : '🔷'}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1">🐙</span> GitHub
                    </a>
                  )}
                  {project.gitlabUrl && (
                    <a 
                      href={project.gitlabUrl} 
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1">🔷</span> GitLab
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1">🚀</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No projects found. Please check your GitHub/GitLab username.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;