"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Overlay = () => {
  const { scrollYProgress } = useScroll();

  // Three sections:
  // 0% -> "My Name. Creative Developer." (center)
  // 30% -> "I build digital experiences." (left)
  // 60% -> "Bridging design and engineering." (right)

  // Title Animation (Fade out as we scroll)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-50%"]);

  // Section 2 Animation (Fade in at 20%, peak at 30%, fade out at 45%)
  const section2Opacity = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.15, 0.3, 0.45], ["50%", "0%", "-50%"]);

  // Section 3 Animation (Fade in at 45%, peak at 60%, fade out at 75%)
  const section3Opacity = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.45, 0.6, 0.75], ["50%", "0%", "-50%"]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute inset-x-0 mx-auto text-center flex flex-col items-center justify-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
            Mohit Gupta
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-light text-neutral-300 tracking-wide drop-shadow-md">
            Python Full Stack Developer
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: section2Opacity, y: section2Y }}
          className="absolute left-8 md:left-24 max-w-lg"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            I build digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              experiences.
            </span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: section3Opacity, y: section3Y }}
          className="absolute right-8 md:right-24 max-w-lg text-right"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
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
