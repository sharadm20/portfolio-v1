// src/services/githubService.ts

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
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  gitlabUrl?: string;
  demoUrl?: string;
  source: 'github' | 'gitlab';
}

export const fetchGitHubRepos = async (username: string): Promise<Project[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
    
    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    
    // Process the repos into the format expected by the Projects component
    return repos.map(repo => ({
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