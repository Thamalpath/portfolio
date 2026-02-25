"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/lib/projects";

interface ProjectMediaProps {
  media: MediaItem[];
  accentColor: string;
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.94,
  }),
};

export default function ProjectMedia({
  media,
  accentColor,
}: ProjectMediaProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause all videos then play the current one
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0) return media.length - 1;
        if (next >= media.length) return 0;
        return next;
      });
    },
    [media.length],
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  if (!media || media.length === 0) return null;

  const item = media[current];

  return (
    <div className="mb-8 sm:mb-12 select-none">
      {/* ── Main Viewport ── */}
      <div
        className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-black group"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Slides */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 320, damping: 32 },
              opacity: { duration: 0.18 },
              scale: { duration: 0.35 },
            }}
            className="absolute inset-0"
          >
            {item.type === "video" ? (
              <div className="relative w-full h-full">
                <video
                  ref={(el) => {
                    videoRefs.current[current] = el;
                  }}
                  src={item.url}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Video badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <Play size={9} className="fill-white text-white" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white">
                    Video
                  </span>
                </div>
              </div>
            ) : (
              <img
                src={item.url}
                alt={item.caption ?? `Slide ${current + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            )}

            {/* Caption gradient overlay */}
            {item.caption && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-4 sm:py-6 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
              >
                <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  {item.caption}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Prev / Next buttons ── */}
        {media.length > 1 && (
          <>
            <button
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/15 hover:border-white/25 transition-all duration-250"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => go(1)}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/15 hover:border-white/25 transition-all duration-250"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* ── Slide counter ── */}
        {media.length > 1 && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            <span className="text-[10px] sm:text-xs font-bold text-white tabular-nums">
              {current + 1}
            </span>
            <span className="text-[10px] sm:text-xs text-white/40 font-medium">
              /
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-white/40 tabular-nums">
              {media.length}
            </span>
          </div>
        )}

        {/* ── Dot indicators ── */}
        {media.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {media.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  background:
                    i === current ? accentColor : "rgba(255,255,255,0.25)",
                  boxShadow:
                    i === current ? `0 0 8px ${accentColor}80` : "none",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Thumbnail Strip ── */}
      {media.length > 1 && (
        <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto pb-1 custom-scroll-x">
          {media.map((m, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-250 focus:outline-none"
              style={{
                width: 80,
                height: 52,
                borderColor:
                  i === current ? accentColor : "rgba(255,255,255,0.10)",
                boxShadow: i === current ? `0 0 12px ${accentColor}50` : "none",
              }}
            >
              {m.type === "video" ? (
                <>
                  {m.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.thumbnail}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                      <Play size={16} className="text-white/60 fill-white/60" />
                    </div>
                  )}
                  {/* Video icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <Play size={8} className="text-white fill-white ml-px" />
                    </div>
                  </div>
                </>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.url}
                  alt={m.caption ?? `Thumb ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Active overlay */}
              {i === current && (
                <motion.div
                  layoutId="thumb-active"
                  className="absolute inset-0 rounded-[10px]"
                  style={{ border: `2px solid ${accentColor}` }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
