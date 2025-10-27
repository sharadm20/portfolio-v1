'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsProvider } from './contexts/ProjectsContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
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
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <ThemeToggle />
        <main>
          <Hero />
          <Skills skills={skillsData} />
          <Projects />
          <Certifications certifications={certificationsData} />
          <Contact />
        </main>
        <Footer />
      </div>
    </ProjectsProvider>
  );
}