"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web App",
    description: "A futuristic e-commerce experience with 3D product viewing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "SaaS",
    description: "Real-time analytics and financial tools built for scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Creative Agency",
    category: "Portfolio",
    description: "Award-winning portfolio featuring WebGL interactions.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "AI Assistant",
    category: "Mobile App",
    description: "Voice-first AI agent with multi-language support.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
  },
];

export const Projects = () => {
  return (
    <section className="relative z-20 bg-black min-h-screen py-32 px-6 md:px-12 lg:px-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Selected Works
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 box-border pointer-events-none">
                  {/* Backdrop blur + thin borders wrapper */}
                  <div className="relative w-full overflow-hidden p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                    <p className="text-sm font-medium tracking-widest text-blue-400 mb-2 uppercase">
                        {project.category}
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                        {project.title}
                    </h3>
                    <p className="text-neutral-300 font-light text-sm line-clamp-2">
                        {project.description}
                    </p>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
