'use client';

import { Navigation } from '@/app/components/navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/about';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}