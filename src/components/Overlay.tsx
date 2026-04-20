"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Overlay = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Title Animation
  const titleOpacity = useTransform(scrollYProgress, [0, 0.08, 0.09], [1, 0, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.08], ["0%", "20%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.95]);

  // Section 2
  const section2Opacity = useTransform(scrollYProgress, [0.15, 0.28, 0.42], [0, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.15, 0.28, 0.42], ["40%", "0%", "-40%"]);
  const section2Scale = useTransform(scrollYProgress, [0.15, 0.28, 0.42], [0.95, 1, 0.95]);

  // Section 3
  const section3Opacity = useTransform(scrollYProgress, [0.42, 0.58, 0.72], [0, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.42, 0.58, 0.72], ["40%", "0%", "-40%"]);
  const section3Scale = useTransform(scrollYProgress, [0.42, 0.58, 0.72], [0.95, 1, 0.95]);

  // Scroll indicator opacity
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden relative">

        {/* Section 1 - Hero Name */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
          className="absolute bottom-[8vh] left-0 w-full text-center flex flex-col items-center pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
              Mohit Gupta
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="mt-4 text-xl md:text-3xl font-light text-neutral-300 tracking-wide drop-shadow-lg">
              Python Full Stack Developer
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-gradient-to-b from-[#00d2ff] to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Section 2 - Digital Experiences */}
        <motion.div
          style={{ opacity: section2Opacity, y: section2Y, scale: section2Scale }}
          className="absolute top-1/2 -translate-y-1/2 left-8 md:left-24 lg:left-32 max-w-lg"
        >
          <div className="bg-black/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]" />
            <div className="relative">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm tracking-[0.3em] text-[#00d2ff] uppercase mb-4 font-medium"
              >
                What I Do
              </motion.p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl leading-[0.9]">
                I build digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  experiences.
                </span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-neutral-400 font-light text-sm md:text-base max-w-sm"
              >
                Creating seamless, performant web applications that bridge the gap between design and technology.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Section 3 - Design & Engineering */}
        <motion.div
          style={{ opacity: section3Opacity, y: section3Y, scale: section3Scale }}
          className="absolute top-1/2 -translate-y-1/2 right-8 md:right-24 lg:right-32 max-w-lg"
        >
          <div className="bg-black/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden text-right">
            {/* Glow effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px]" />
            <div className="relative">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm tracking-[0.3em] text-emerald-400 uppercase mb-4 font-medium"
              >
                My Philosophy
              </motion.p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl leading-[0.9]">
                Bridging design{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  and engineering.
                </span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-neutral-400 font-light text-sm md:text-base max-w-sm ml-auto"
              >
                Where aesthetics meet functionality — every pixel serves a purpose, every interaction tells a story.
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
