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
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-slate-700/50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="text-2xl font-bold font-dm-sans bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
            >
              SM
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "#home", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Work" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 md:pt-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

          <motion.div
            className="relative z-10 text-center max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Profile Image Placeholder */}
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-2xl shadow-blue-500/25 flex items-center justify-center text-2xl md:text-4xl font-bold text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              SM
            </motion.div>

            <motion.p
              className="text-xs md:text-sm font-medium tracking-[0.2em] text-blue-300 mb-3 md:mb-4 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Full-Stack Developer
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Sharad Mishra
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Crafting exceptional digital experiences with modern technologies and innovative solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
                View My Work
              </button>
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center">
              <span className="text-xs mb-2 hidden md:block">Scroll</span>
              <div className="w-px h-6 md:h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <Skills skills={skillsData} />

        {/* Projects Section - using the Projects component with context */}
        <Projects />

        {/* Certifications Section */}
        <Certifications certifications={certificationsData} />

        {/* Contact Section */}
        <section id="contact" className="px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium tracking-wide text-blue-400 mb-2 uppercase">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can bring your ideas to life.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:sharadmishra@example.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  sharadmishra@example.com
                </a>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-2-2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">Remote / Global</p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm">Within 24 hours</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl mr-4">
                Send Message
              </button>
              <button className="px-6 py-2 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Download Resume
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-8 py-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div
                className="flex gap-4 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="hover:text-blue-400 transition-colors cursor-pointer">⟡</span>
                <span className="hover:text-purple-400 transition-colors cursor-pointer">⊙</span>
                <span className="hover:text-pink-400 transition-colors cursor-pointer">◐</span>
              </motion.div>

              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                SM
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 text-xs justify-center md:justify-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Work</a>
                <a href="#certifications" className="text-gray-400 hover:text-blue-400 transition-colors">Certs</a>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 pt-6 border-t border-slate-800 text-center text-gray-500 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2024 Sharad Mishra. Built with Next.js, TypeScript, and Tailwind CSS.</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </ProjectsProvider>
  );
}