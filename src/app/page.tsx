"use client";

import { useState } from "react";
import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { CustomCursor } from '@/components/CustomCursor';
import { Preloader } from '@/components/Preloader';
import { SmoothScroll } from '@/components/SmoothScroll';
import { NoiseOverlay } from '@/components/NoiseOverlay';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SkillsMarquee } from '@/components/SkillsMarquee';
import { TextReveal } from '@/components/TextReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  "Python", "JavaScript", "React.js", "Next.js", "Django", "FastAPI",
  "Flask", "AI/ML", "HTML/CSS", "OOP", "Git", "SQL",
  "TypeScript", "TailwindCSS", "PostgreSQL", "Docker",
];

const skills2 = [
  "REST APIs", "MongoDB", "Redis", "GraphQL", "AWS", "Figma",
  "CI/CD", "Agile", "Problem Solving", "System Design",
];

export default function Home() {
  const frameCount = 120;
  const [isPreloaded, setIsPreloaded] = useState(false);

  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      <ScrollProgress />
      <Navigation />

      {!isPreloaded && <Preloader onComplete={() => setIsPreloaded(true)} />}

      <SmoothScroll>
        <main className="bg-black text-white relative w-full h-full min-h-screen">
          {/* Hero Scrolly Section */}
          <div className="relative">
            <Overlay />
            <ScrollyCanvas frameCount={frameCount} />
          </div>

          {/* Resume Callout Section */}
          <section className="py-32 bg-black flex flex-col items-center justify-center border-t border-neutral-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00d2ff]/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d2ff]/5 rounded-full blur-[150px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="z-10 text-center px-4"
            >
              <TextReveal
                text="Want to know more about my background?"
                className="text-3xl md:text-5xl font-bold text-white mb-10"
                type="words"
              />
            </motion.div>

            <MagneticButton strength={20}>
              <Link
                href="/resume"
                className="z-10 px-10 py-5 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-full text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all duration-300 inline-flex items-center gap-3"
                data-cursor-text="Resume"
              >
                View My Full Resume
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </MagneticButton>
          </section>

          {/* Skills Marquee Section */}
          <section id="skills" className="py-20 bg-black border-t border-neutral-900 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <p className="text-sm tracking-[0.3em] text-[#00d2ff] uppercase font-medium">Technical Expertise</p>
            </motion.div>

            <div className="space-y-4">
              <SkillsMarquee skills={skills} speed={40} direction="left" />
              <SkillsMarquee skills={skills2} speed={35} direction="right" />
            </div>
          </section>

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
