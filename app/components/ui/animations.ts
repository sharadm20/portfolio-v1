"use client";

import { Variants } from "framer-motion";

// Common animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Progress bar animation
export const progressBar: Variants = {
  hidden: { width: 0 },
  visible: (width: string) => ({
    width,
    transition: { duration: 1, ease: "easeOut" }
  })
};

// Button hover animations
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Card hover animations
export const cardHover = {
  y: -5,
  transition: { duration: 0.3 }
};

// Scroll indicator animation
export const scrollIndicator = {
  y: [0, 10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};