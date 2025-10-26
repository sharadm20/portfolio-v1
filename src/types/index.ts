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

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  expiration?: string;
  credentialId?: string;
  credentialUrl?: string;
}