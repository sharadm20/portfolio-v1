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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                SM
              </motion.div>
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#certifications", label: "Certifications" },
                  { href: "#resume", label: "Resume" }
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span
                  className="block text-gray-900 dark:text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Sharad Mishra
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Full-Stack Developer crafting exceptional digital experiences with modern technologies
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <motion.div
                  className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills skills={skillsData} />

        {/* Projects Section - using the Projects component with context */}
        <Projects />

        {/* Certifications Section */}
        <Certifications certifications={certificationsData} />

        {/* Resume Editor Section */}
        <ResumeEditor />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.a
                  href="mailto:sharad.m2003@gmail.com"
                  className="group flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Send Email</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center space-x-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {[
                  {
                    href: "https://github.com/sharadm20",
                    label: "GitHub",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.602-3.369-1.344-3.369-1.344-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    href: "http://linkedin.com/in/sharad-mishra-1847738b",
                    label: "LinkedIn",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    )
                  }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Footer */}
              <motion.div
                className="mt-16 pt-8 border-t border-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-gray-400 text-sm">
                  © 2025 Sharad Mishra. Built with Next.js, TypeScript, and Tailwind CSS.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </ProjectsProvider>
  );
}