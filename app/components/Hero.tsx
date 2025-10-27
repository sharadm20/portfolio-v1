'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      id="about"
      className="min-h-screen flex items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#e6eef6]"
              style={{ fontFamily: "'Bungee Spice', cursive" }}
              variants={itemVariants}
            >
              Hi, I'm <span className="text-[#ffd6e0]">Sharad</span>
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#9aa4b2]"
              style={{ fontFamily: "'Bungee Spice', cursive" }}
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-lg text-[#9aa4b2] mb-8 max-w-lg mx-auto leading-relaxed"
              variants={itemVariants}
            >
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
              Even if you don't hire me, scroll down and take a look at my work.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="#projects">
                <motion.button
                  className="btn btn-large"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <Link href="#contact">
                <motion.button
                  className="btn btn-large btn-outline"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Background gradient circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
                
                {/* Profile circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-full w-56 h-56 md:w-72 md:h-72 flex items-center justify-center border-4 border-white shadow-xl">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 md:w-64 md:h-64 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-blue-500/30"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-blue-500/30"
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="mt-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[#9aa4b2] text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              className="w-6 h-6 text-[#9aa4b2]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;