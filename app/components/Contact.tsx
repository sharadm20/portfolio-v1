'use client';

<<<<<<< Updated upstream
import { motion } from 'framer-motion';
=======
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";
import { Section, SectionHeader } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button";
import { fadeInUp } from "@/app/components/ui/animations";
>>>>>>> Stashed changes

export default function Contact() {
  return (
<<<<<<< Updated upstream
    <section id="contact" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Get In Touch</h2>

        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border bg-background"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border bg-background"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 rounded-lg border bg-background"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:your@email.com">
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
=======
    <Section id="contact" background="muted">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss opportunities? Feel free to reach out!"
      />

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="glass rounded-2xl p-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-secondary/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-secondary/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-secondary/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-secondary/50 border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message..."
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap justify-center gap-6">
            <Link
              href="https://github.com/sharadm20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5 mr-2" /> GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/sharad-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
            </Link>
            <Link
              href="mailto:contact@sharadmishra.dev"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" /> Email
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
>>>>>>> Stashed changes
  );
}