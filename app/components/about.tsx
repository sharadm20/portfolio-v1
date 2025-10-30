'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary to-secondary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground">
              Your bio text here. Describe your background, experience, and passion for development.
            </p>
            <p className="text-lg text-muted-foreground">
              Add more details about your journey, interests, and what drives you.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}