'use client';

<<<<<<< Updated upstream
import { motion } from 'framer-motion';
=======
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/app/components/ui/section";
import { Heading, Text } from "@/app/components/ui/typography";
import { fadeInLeft, fadeInRight } from "@/app/components/ui/animations";
>>>>>>> Stashed changes

export default function About() {
  return (
<<<<<<< Updated upstream
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
=======
    <Section id="about" background="muted">
      <SectionHeader
        title="About Me"
        subtitle="I'm a passionate fullstack developer and AI engineer with expertise in building scalable web applications and implementing machine learning solutions."
      />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Heading level="h3" className="mb-4">
            My Journey
          </Heading>
          <Text variant="muted" className="mb-4">
            My journey in tech started early, and I've been passionate about creating
            solutions that make a difference. I specialize in building fullstack
            applications with modern JavaScript frameworks and implementing AI/ML
            solutions.
          </Text>
          <Text variant="muted">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source, or writing technical articles.
          </Text>
        </motion.div>
      </div>
    </Section>
>>>>>>> Stashed changes
  );
}