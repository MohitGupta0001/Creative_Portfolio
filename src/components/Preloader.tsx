"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const increment = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += increment + Math.random() * increment * 0.5;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 600);
        }, 400);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
        >
          {/* Animated background lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent origin-left"
                style={{ left: `${20 + i * 15}%` }}
              />
            ))}
          </div>

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              MG
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">.</span>
            </h1>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          {/* Progress Number */}
          <motion.div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-5xl font-bold text-white tabular-nums tracking-tighter">
              {progress}
            </span>
            <span className="text-sm text-neutral-500 font-light">%</span>
          </motion.div>

          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-12 text-xs tracking-[0.3em] text-neutral-600 uppercase"
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
