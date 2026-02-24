"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/lib/projects";

interface ProjectMediaProps {
  media: MediaItem[];
  accentColor: string;
}

export default function ProjectMedia({ media, accentColor }: ProjectMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = media.length - 1;
      if (nextIndex >= media.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group/container mb-12">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {media[currentIndex].type === "image" ? (
            <img
              src={media[currentIndex].url}
              alt={media[currentIndex].caption || "Project Screenshot"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative w-full h-full">
              <video
                ref={(el) => { videoRefs.current[currentIndex] = el; }}
                src={media[currentIndex].url}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                <Play size={10} fill="currentColor" />
                Demo Video
              </div>
            </div>
          )}
          
          {/* Caption Overlay */}
          {media[currentIndex].caption && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-sm font-medium tracking-wide"
              >
                {media[currentIndex].caption}
              </motion.p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all pointer-events-auto"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all pointer-events-auto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === index 
                ? "w-8" 
                : "bg-white/20 hover:bg-white/40"
            )}
            style={{ backgroundColor: currentIndex === index ? accentColor : undefined }}
          />
        ))}
      </div>
    </div>
  );
}
