"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorText = target.getAttribute("data-cursor-text");
      if (cursorText) setHoverText(cursorText);
      setIsHovering(true);
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setHoverText("");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor-hover], input, textarea, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [isMobile, mouseX, mouseY, dotX, dotY]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        ref={cursorRef}
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : isClicking ? 30 : 40,
            height: isHovering ? 80 : isClicking ? 30 : 40,
            borderRadius: isHovering ? "50%" : "50%",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center bg-white rounded-full"
        >
          {hoverText && (
            <span className="text-[10px] font-bold text-black uppercase tracking-widest whitespace-nowrap">
              {hoverText}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        ref={cursorDotRef}
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </motion.div>
    </>
  );
};
