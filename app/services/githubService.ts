// src/services/githubService.ts
import type { Project } from '../types';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork?: boolean;
  archived?: boolean;
}

export const fetchGitHubRepos = async (username: string): Promise<Project[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=10`);

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Sort repos by stars, then by recent activity, and limit to 3-4
    const sortedRepos = repos
      .filter(repo => !repo.fork && !repo.archived) // Exclude forks and archived repos
      .sort((a, b) => {
        // Primary: stars
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        // Secondary: recent activity (updated_at)
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 4); // Limit to 4 repos

    // Process the repos into the format expected by the Projects component
    return sortedRepos.map(repo => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || 'No description provided',
      technologies: repo.language ? [repo.language] : [],
      githubUrl: repo.html_url,
      source: 'github'
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

// Function to fetch specific user repos if you know their exact names
export const fetchSpecificGitHubRepos = async (username: string, repoNames: string[]): Promise<Project[]> => {
  try {
    const reposPromises = repoNames.map(repoName => 
      fetch(`https://api.github.com/repos/${username}/${repoName}`)
        .then(response => response.json())
        .catch(error => {
          console.error(`Error fetching repository ${repoName}:`, error);
          return null;
        })
    );
    
    const repos = await Promise.all(reposPromises);
    const validRepos = repos.filter(repo => repo !== null);
    
    return validRepos.map(repo => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || 'No description provided',
      technologies: repo.language ? [repo.language] : [],
      githubUrl: repo.html_url,
      source: 'github'
    }));
  } catch (error) {
    console.error('Error fetching specific GitHub repositories:', error);
    return [];
  }
};