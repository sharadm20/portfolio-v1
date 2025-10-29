'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Developer',
    company: 'Company Name',
    period: '2023 - Present',
    description: [
      'Led development of key features',
      'Mentored junior developers',
    ],
  },
  // Add more experiences
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
              
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-primary font-semibold">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              
              <ul className="list-disc list-inside space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}