"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Overlay = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Three sections:
  // 0% -> "My Name. Creative Developer." (center)
  // 30% -> "I build digital experiences." (left)
  // 60% -> "Bridging design and engineering." (right)

  // Title Animation (Fade out as we scroll)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.11], [1, 0, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], ["0%", "20%"]);

  // Section 2 Animation (Fade in at 20%, peak at 30%, fade out at 45%)
  const section2Opacity = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.15, 0.3, 0.45], ["50%", "0%", "-50%"]);

  // Section 3 Animation (Fade in at 45%, peak at 60%, fade out at 75%)
  const section3Opacity = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.45, 0.6, 0.75], ["50%", "0%", "-50%"]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden relative">

        {/* Section 1 - Positioned at the very bottom edge to clear the face */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute bottom-[5vh] left-0 w-full text-center flex flex-col items-center pointer-events-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Mohit Gupta
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-light text-neutral-300 tracking-wide drop-shadow-lg">
            Python Full Stack Developer
          </p>
        </motion.div>

        {/* Section 2 - Centered vertically */}
        <motion.div
          style={{ opacity: section2Opacity, y: section2Y }}
          className="absolute top-1/2 -translate-y-1/2 left-8 md:left-24 lg:left-32 max-w-lg bg-black/10 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl leading-tight">
            I build digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              experiences.
            </span>
          </h2>
        </motion.div>

        {/* Section 3 - Centered vertically */}
        <motion.div
          style={{ opacity: section3Opacity, y: section3Y }}
          className="absolute top-1/2 -translate-y-1/2 right-8 md:right-24 lg:right-32 max-w-lg text-right bg-black/10 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl leading-tight">
            Bridging design<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              and engineering.
            </span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
};
