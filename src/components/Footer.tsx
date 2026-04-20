"use client";

import React from "react";
import { MagneticButton } from "./MagneticButton";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-neutral-900 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-2">
              MG<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">.</span>
            </h3>
            <p className="text-neutral-500 text-sm font-light">Python Full Stack Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton strength={40}>
              <a
                href="https://github.com/MohitGupta0001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#00d2ff]/50 transition-all duration-300"
                data-cursor-text="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton strength={40}>
              <a
                href="https://linkedin.com/in/mohit-gupta-09b500314"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#00d2ff]/50 transition-all duration-300"
                data-cursor-text="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton strength={40}>
              <a
                href="mailto:mg65028@gmail.com"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#00d2ff]/50 transition-all duration-300"
                data-cursor-text="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Mohit Gupta. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700">
            Designed & Built with passion
          </p>

          {/* Back to top */}
          <MagneticButton strength={40}>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#00d2ff]/50 transition-all duration-300"
              data-cursor-text="Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};
