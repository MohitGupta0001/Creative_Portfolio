"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "chars" | "words" | "lines";
  as?: "h1" | "h2" | "h3" | "p" | "span";
  staggerChildren?: number;
  duration?: number;
  y?: number;
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  type = "words",
  as: Tag = "h2",
  staggerChildren = 0.04,
  duration = 0.6,
  y = 100,
}: TextRevealProps) => {
  let items: string[];

  switch (type) {
    case "chars":
      items = text.split("");
      break;
    case "lines":
      items = text.split("\n");
      break;
    case "words":
    default:
      items = text.split(" ");
      break;
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y,
      opacity: 0,
      rotateX: -40,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: "600px" }}
    >
      <Tag className={`${className} flex flex-wrap`}>
        {items.map((item, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              variants={itemVariants}
              className="inline-block"
              style={{ transformOrigin: "bottom" }}
            >
              {item}
              {type === "words" && index < items.length - 1 && "\u00A0"}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
};
