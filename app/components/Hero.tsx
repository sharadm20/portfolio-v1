"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Section } from "@/app/components/ui/section";
import { Heading, Text } from "@/app/components/ui/typography";
import { Button } from "@/app/components/ui/button";
import { ResumeDownload } from "@/app/components/ui/resume-download";
import { fadeInUp, scrollIndicator } from "@/app/components/ui/animations";

export function Hero() {
  return (
    <Section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-20"
      padding="xl"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <Heading
          level="h1"
          variant="gradient"
          className="mb-6"
        >
          Hi, I'm <span className="animated-gradient">Sharad</span>
        </Heading>

        <Heading
          level="h2"
          variant="muted"
          className="mb-8"
        >
          Fullstack Developer & AI Engineer
        </Heading>

        <Text
          size="xl"
          variant="muted"
          className="mb-10 max-w-2xl mx-auto"
        >
          I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
          Specializing in modern web technologies and AI integration.
        </Text>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <Link href="#projects">
            <Button size="lg" className="rounded-full">
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg" className="glass rounded-full">
              Contact Me
            </Button>
          </Link>
        </motion.div>

        <ResumeDownload
          variant="ghost"
          className="text-muted-foreground hover:text-primary"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-16 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Text variant="muted" size="sm" className="mb-2">
          Scroll to explore
        </Text>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </Section>
  );
}