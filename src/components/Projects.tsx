"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { TextReveal } from "./TextReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web App",
    description: "A futuristic e-commerce experience with 3D product viewing, real-time inventory, and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "AI/ML"],
    color: "from-blue-500/20 to-purple-500/20",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "SaaS",
    description: "Real-time analytics and financial tools built for scale with WebSocket streaming and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Python", "FastAPI"],
    color: "from-emerald-500/20 to-teal-500/20",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Creative Agency",
    category: "Portfolio",
    description: "Award-winning portfolio featuring WebGL interactions and immersive storytelling.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    tags: ["Three.js", "GSAP", "WebGL"],
    color: "from-orange-500/20 to-red-500/20",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "AI Assistant",
    category: "Mobile App",
    description: "Voice-first AI agent with multi-language support and real-time speech recognition.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "TensorFlow", "React Native"],
    color: "from-violet-500/20 to-pink-500/20",
    link: "#",
    github: "#",
    featured: false,
  },
];

export const Projects = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" ref={sectionRef} className="relative z-20 bg-black min-h-screen py-32 px-6 md:px-12 lg:px-24 border-t border-neutral-900">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#00d2ff]/30 to-transparent" />
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-20 right-0 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] text-[#00d2ff] uppercase mb-4 font-medium"
          >
            Selected Works
          </motion.p>
          <TextReveal
            text="Projects that define my craft."
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.9]"
            type="words"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] w-24 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mt-8 origin-left"
          />
        </div>

        {/* Featured Projects - Large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <TiltCard key={project.id} tiltAmount={6}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors duration-500"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/10 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-neutral-400 font-light text-sm md:text-base mb-4 max-w-sm">{project.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.link} className="flex items-center gap-2 text-sm text-[#00d2ff] hover:text-white transition-colors group/link" data-cursor-text="View">
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" data-cursor-text="Code">
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Other Projects - Smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <TiltCard key={project.id} tiltAmount={4}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="text-xs font-medium tracking-wider uppercase text-[#00d2ff]">{project.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                  <p className="text-neutral-400 font-light text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.link} className="flex items-center gap-2 text-sm text-[#00d2ff] hover:text-white transition-colors group/link">
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
