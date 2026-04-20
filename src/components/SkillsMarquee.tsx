"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillsMarqueeProps {
  skills: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export const SkillsMarquee = ({
  skills,
  speed = 30,
  direction = "left",
  className = "",
}: SkillsMarqueeProps) => {
  const doubledSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubledSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-6 flex-shrink-0"
          >
            <span className="text-sm md:text-base font-medium text-neutral-400 hover:text-white transition-colors cursor-default px-4 py-2 border border-white/5 rounded-full hover:border-[#00d2ff]/30 hover:bg-[#00d2ff]/5">
              {skill}
            </span>
            <span className="text-[#00d2ff]/30 text-xs">◆</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
