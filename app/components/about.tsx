"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            I'm a passionate fullstack developer and AI engineer with expertise in building 
            scalable web applications and implementing machine learning solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-accent">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
                  Profile Image
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium">
                Developer
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              My journey in tech started early, and I've been passionate about creating 
              solutions that make a difference. I specialize in building fullstack 
              applications with modern JavaScript frameworks and implementing AI/ML 
              solutions.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source, or writing technical articles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}