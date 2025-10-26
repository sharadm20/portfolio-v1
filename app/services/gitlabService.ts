// src/services/gitlabService.ts
import type { Project } from '../types';

interface GitLabProject {
  id: number;
  name: string;
  path_with_namespace: string;
  description: string;
  web_url: string;
  language: string;
  star_count: number;
  forks_count: number;
  last_activity_at: string;
}

export const fetchGitLabProjects = async (username: string): Promise<Project[]> => {
  try {
    // Using GitLab's public API to search for projects by username
    const response = await fetch(`https://gitlab.com/api/v4/projects?search=${username}&simple=true`);
    
    if (!response.ok) {
      throw new Error(`GitLab API request failed with status ${response.status}`);
    }
    
    const projects: GitLabProject[] = await response.json();
    
    // Process the projects into the format expected by the Projects component
    return projects.map(project => ({
      id: project.id,
      title: project.name,
      description: project.description || 'No description provided',
      technologies: project.language ? [project.language] : [],
      gitlabUrl: project.web_url,
      source: 'gitlab'
    }));
  } catch (error) {
    console.error('Error fetching GitLab projects:', error);
    return [];
  }
};

// Function to fetch projects from a GitLab group
export const fetchGitLabGroupProjects = async (groupId: number): Promise<Project[]> => {
  try {
    const response = await fetch(`https://gitlab.com/api/v4/groups/${groupId}/projects`);
    
    if (!response.ok) {
      throw new Error(`GitLab API request failed with status ${response.status}`);
    }
    
    const projects: GitLabProject[] = await response.json();
    
    return projects.map(project => ({
      id: project.id,
      title: project.name,
      description: project.description || 'No description provided',
      technologies: project.language ? [project.language] : [],
      gitlabUrl: project.web_url,
      source: 'gitlab'
    }));
  } catch (error) {
    console.error('Error fetching GitLab group projects:', error);
    return [];
  }
};

// Function to fetch specific GitLab projects by their IDs
export const fetchSpecificGitLabProjects = async (projectIds: number[]): Promise<Project[]> => {
  try {
    const projectsPromises = projectIds.map(projectId => 
      fetch(`https://gitlab.com/api/v4/projects/${projectId}`)
        .then(response => response.json())
        .catch(error => {
          console.error(`Error fetching GitLab project ${projectId}:`, error);
          return null;
        })
    );
    
    const projects = await Promise.all(projectsPromises);
    const validProjects = projects.filter(project => project !== null);
    
    return validProjects.map(project => ({
      id: project.id,
      title: project.name,
      description: project.description || 'No description provided',
      technologies: project.language ? [project.language] : [],
      gitlabUrl: project.web_url,
      source: 'gitlab'
    }));
  } catch (error) {
    console.error('Error fetching specific GitLab projects:', error);
    return [];
  }
};