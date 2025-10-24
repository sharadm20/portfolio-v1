import React from 'react';
import { ProjectsProvider } from './contexts/ProjectsContext';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ResumeEditor from './components/ResumeEditor';
import './App.css';

// Define our data types
interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  expiration?: string;
  credentialId?: string;
  credentialUrl?: string;
}

// Sample data - in a real app, this would come from state/props or an API
const skillsData: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'languages' },
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'languages' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'languages' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'AWS', level: 70, category: 'devops' },
];

const certificationsData: Certification[] = [
  {
    id: 1,
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    expiration: 'Jan 2027',
    credentialUrl: '#'
  },
  {
    id: 2,
    name: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: 'Mar 2024',
    credentialUrl: '#'
  },
  {
    id: 3,
    name: 'React Developer Certificate',
    issuer: 'Meta',
    date: 'May 2023',
    credentialUrl: '#'
  }
];

function App() {
  return (
    <ProjectsProvider githubUsername="sharadm20" gitlabUsername="sharadm20">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
        {/* Navigation */}
        <nav className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 font-bold text-xl text-indigo-600 dark:text-indigo-400">
                My Portfolio
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</a>
                  <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Skills</a>
                  <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Projects</a>
                  <a href="#certifications" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Certifications</a>
                  <a href="#resume" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Resume Editor</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header id="home" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">Sharad Mishra</span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                A passionate developer building amazing web experiences and solving complex problems
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                >
                  View My Work
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-indigo-600 dark:text-indigo-400 font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <Skills skills={skillsData} />

        {/* Projects Section - using the Projects component with context */}
        <Projects />

        {/* Certifications Section */}
        <Certifications certifications={certificationsData} />

        {/* Resume Editor Section */}
        <ResumeEditor />

        {/* Contact Section */}
        <footer id="contact" className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                I'm currently open to new opportunities. Feel free to reach out if you have a project you'd like to work on together.
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                <a href="http://linkedin.com/in/sharad-mishra-1847738b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/sharadm20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.602-3.369-1.344-3.369-1.344-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="mailto:sharad.m2003@gmail.com" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <div className="mt-8 text-center text-gray-400 text-sm">
                <p>© 2025 Sharad Mishra. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ProjectsProvider>
  );
}

export default App
