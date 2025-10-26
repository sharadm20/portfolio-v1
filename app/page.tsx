'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsProvider } from './contexts/ProjectsContext';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ResumeEditor from './components/ResumeEditor';
import type { Skill, Certification } from './types';

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

export default function Home() {
  return (
    <ProjectsProvider githubUsername="sharadm20" gitlabUsername="sharadm20">
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-slate-950/50">
          <div className="flex gap-12 text-sm tracking-widest">
            <a href="#home" className="hover:text-blue-400 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">WORK</a>
          </div>
          <div className="text-3xl font-bold">SM</div>
          <div className="flex gap-12 text-sm tracking-widest">
            <a href="#certifications" className="hover:text-blue-400 transition-colors">CERTS</a>
            <a href="#resume" className="hover:text-blue-400 transition-colors">CONTACT</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-24">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 absolute"></div>
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400 via-pink-400 to-orange-300 rounded-full mb-8 shadow-2xl shadow-blue-500/50"></div>
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] text-blue-300 mb-2">FULL-STACK DEVELOPER</p>
              <h1 className="text-6xl font-serif mb-2">SHARAD MISHRA</h1>
              <p className="text-xs tracking-[0.3em] text-gray-400">MODERN WEB DEVELOPMENT</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-xs">SCROLL ↓</div>
        </section>

        {/* Skills Section */}
        <Skills skills={skillsData} />

        {/* Projects Section - using the Projects component with context */}
        <Projects />

        {/* Certifications Section */}
        <Certifications certifications={certificationsData} />

        {/* Resume Editor Section */}
        <section className="px-8 py-20">
          <div className="text-xs tracking-[0.3em] text-blue-400 mb-4">+ RESUME EDITOR</div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-purple-500 to-blue-900 rounded-lg overflow-hidden mb-8 hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="h-96 flex items-center justify-center">
                <div className="text-6xl font-bold">RE</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs tracking-widest text-gray-400 mb-4">SHARAD MISHRA</p>
              <h2 className="text-5xl font-serif mb-6">Resume Builder</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
                Create and customize your professional resume with our built-in editor and LinkedIn integration.
              </p>
              <button className="border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-all">
                EDIT RESUME →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-6 text-xs">
              <span>⟡</span>
              <span>⊙</span>
              <span>◐</span>
            </div>
            <div className="text-4xl font-bold">SM</div>
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Work</a>
              <a href="#certifications" className="hover:text-blue-400 transition-colors">Certs</a>
              <a href="#resume" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </ProjectsProvider>
  );
}