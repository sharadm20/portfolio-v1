// src/contexts/ProjectsContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project, fetchGitHubRepos, fetchSpecificGitHubRepos } from '../services/githubService';
import { fetchGitLabProjects, fetchSpecificGitLabProjects } from '../services/gitlabService';

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchAllProjects: (githubUsername: string, gitlabUsername: string) => Promise<void>;
  addDemoUrl: (projectId: number, source: 'github' | 'gitlab', demoUrl: string) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

interface ProjectsProviderProps {
  children: ReactNode;
  githubUsername?: string;
  gitlabUsername?: string;
}

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ 
  children, 
  githubUsername = 'your-github-username', 
  gitlabUsername = 'your-gitlab-username' 
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllProjects = async (githubUsername: string, gitlabUsername: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch projects from both GitHub and GitLab
      const [githubProjects, gitlabProjects] = await Promise.all([
        fetchGitHubRepos(githubUsername),
        fetchGitLabProjects(gitlabUsername)
      ]);
      
      // Combine projects from both sources
      const allProjects = [...githubProjects, ...gitlabProjects];
      
      setProjects(allProjects);
    } catch (err) {
      setError('Failed to fetch projects');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const addDemoUrl = (projectId: number, source: 'github' | 'gitlab', demoUrl: string) => {
    setProjects(prevProjects => 
      prevProjects.map(project => 
        project.id === projectId && project.source === source 
          ? { ...project, demoUrl } 
          : project
      )
    );
  };

  // Fetch projects when the component mounts
  useEffect(() => {
    fetchAllProjects(githubUsername, gitlabUsername).catch(console.error);
  }, [githubUsername, gitlabUsername]);

  const value = {
    projects,
    loading,
    error,
    fetchAllProjects,
    addDemoUrl
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};