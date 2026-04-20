"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glare?: boolean;
  scale?: number;
}

export const TiltCard = ({
  children,
  className = "",
  tiltAmount = 10,
  glare = true,
  scale = 1.02,
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXVal = ((y - centerY) / centerY) * -tiltAmount;
    const rotateYVal = ((x - centerX) / centerX) * tiltAmount;

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: rotateX !== 0 || rotateY !== 0 ? scale : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (rotateX !== 0 || rotateY !== 0) && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.08), transparent 60%)`,
            zIndex: 10,
          }}
        />
      )}
    </motion.div>
  );
};
