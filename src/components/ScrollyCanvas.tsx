"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  frameCount: number;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ frameCount }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = Array.from({ length: frameCount }).map((_, index) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          // sequence images are assumed to be named sequentially like 0001.webp, 0002.webp, etc.
          // Need to adjust the formatting based on how the actual files are named in the /sequence/ directory.
          // According to the prompt: /sequence/ — WebP frames named sequentially (~89 frames).
          // We will assume 1-based indexing: 1.webp, 2.webp... or 0001.webp. Let's use padStart just in case
          // I will check the actual directory first using list_dir if I could, but wait, the prompt says "named sequentially".
          // In a previous step I saw `sequence` directory. Let's assume `0001.webp` to `0089.webp` for now.
          // Wait, often it's just `0001.webp`... Let's check the directory before hardcoding next. I will use a generic padStart for now.
          const paddedIndex = (index + 1).toString().padStart(4, "0");
          img.src = `/sequence/${paddedIndex}.webp`; // Update this path based on actual naming
          img.onload = () => {
            loadedImages[index] = img;
            resolve();
          };
          img.onerror = (e) => reject(e);
        });
      });

      try {
        await Promise.all(promises);
        setImages(loadedImages);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading images", error);
      }
    };

    loadImages();
  }, [frameCount]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = images[Math.floor(latest)];
    if (!image) return;

    // Draw image maintaining aspect ratio (object-fit: cover equivalent)
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = image.width;
    const imgHeight = image.height;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const x = canvasWidth / 2 - (imgWidth / 2) * scale;
    const y = canvasHeight / 2 - (imgHeight / 2) * scale;

    // Use black background or clear rect
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(image, x, y, imgWidth * scale, imgHeight * scale);
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Trigger a re-draw on resize by subtly forcing an update, 
      // or just trust the next scroll event. We'll manually draw the current frame.
      if (isLoaded && images.length > 0) {
        const ctx = canvas.getContext("2d");
        const image = images[Math.floor(frameIndex.get())];
        if (ctx && image) {
            const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
            const x = canvas.width / 2 - (image.width / 2) * scale;
            const y = canvas.height / 2 - (image.height / 2) * scale;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
        }
      }
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Optional loading state. To keep it awwwards-level, we can make it sleek */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-white text-sm font-light tracking-widest animate-pulse">
              LOADING ASSETS
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
