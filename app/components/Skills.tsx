'use client';

<<<<<<< Updated upstream
import { motion } from 'framer-motion';
=======
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/app/components/ui/section";
import { Text } from "@/app/components/ui/typography";
import { progressBar, staggerItem } from "@/app/components/ui/animations";
>>>>>>> Stashed changes

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'Node.js', level: 82 },
  // Add more skills
];

export default function Skills() {
  return (
<<<<<<< Updated upstream
    <section id="skills" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card p-6"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
=======
    <Section id="skills" background="muted">
      <SectionHeader
        title="Skills"
        subtitle="Technologies and tools I use to build modern applications"
      />

      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-8"
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="flex justify-between mb-2">
              <Text weight="medium">{skill.name}</Text>
              <Text>{skill.level}%</Text>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
              <motion.div
                className="bg-primary h-2.5 rounded-full"
                variants={progressBar}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={`${skill.level}%`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
>>>>>>> Stashed changes
  );
}