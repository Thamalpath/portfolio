"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import type { MediaItem } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause all videos then play the current one
  useEffect(() => {
    // If lightbox is open, we might want to pause videos anyway
    if (isLightboxOpen) {
      videoRefs.current.forEach((v) => v?.pause());
      return;
    }

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current, isLightboxOpen]);

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
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  if (!media || media.length === 0) return null;

  const item = media[current];

  return (
    <div className="mb-4 sm:mb-6 select-none">
      {/* ── Main Viewport ── */}
      <div
        className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black group isolate"
        style={{
          aspectRatio: "16/9",
          maskImage: "-webkit-radial-gradient(white, black)",
        }}
      >
        {/* Border Overlay */}
        <div className="absolute inset-0 z-50 rounded-2xl sm:rounded-3xl border border-white/10 pointer-events-none" />

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
            className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            {/* Glass Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
              {/* Base blur */}
              <div
                className="
                  absolute inset-0
                  backdrop-blur-[80px]
                  backdrop-saturate-200
                  bg-white/10
                  rounded-2xl sm:rounded-3xl
                "
              />

              {/* Soft light gradient */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-br
                  from-white/40
                  via-white/10
                  to-transparent
                  opacity-60
                  rounded-2xl sm:rounded-3xl
                "
              />

              {/* Subtle border glow */}
              <div
                className="
                  absolute inset-0
                  rounded-2xl sm:rounded-3xl
                  border border-white/30
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.3)]
                "
              />

              {/* Dark contrast layer */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Main Content */}
            {item.type === "video" ? (
              <div
                className="relative w-full h-full z-10 flex items-center justify-center cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[current] = el;
                  }}
                  src={item.url}
                  className="w-full h-full object-contain relative z-10"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Video badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 shadow-lg z-20">
                  <Play size={9} className="fill-white text-white" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white">
                    Live Demo
                  </span>
                </div>
              </div>
            ) : (
              <motion.div
                className="relative w-full h-full z-10 cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={item.url}
                  alt={item.caption ?? `Slide ${current + 1}`}
                  className="w-full h-full object-contain relative z-10"
                  draggable={false}
                />
              </motion.div>
            )}

            {/* Caption Overlay */}
            {item.caption && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-[90%] sm:w-auto"
              >
                <div className="px-5 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl text-center">
                  <p className="text-white text-[11px] sm:text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                    {item.caption}
                  </p>
                </div>
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

        {/* ── Dot indicators - Bottom center ── */}
        {media.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
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
      {/* ── Lightbox Overlay ── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-10 bg-black/95 backdrop-blur-2xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-110"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Lightbox Navigation */}
            {media.length > 1 && (
              <div className="absolute inset-x-4 sm:inset-x-10 top-1/2 -translate-y-1/2 flex items-center justify-between z-110 pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto group"
                >
                  <ChevronLeft
                    size={32}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto group"
                >
                  <ChevronRight
                    size={32}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            )}

            <motion.div
              key={current}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-7xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {item.type === "video" ? (
                <video
                  src={item.url}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.9)]"
                  autoPlay
                  controls
                  playsInline
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.caption ?? "Enlarged view"}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.9)]"
                />
              )}

              {item.caption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center max-w-2xl"
                >
                  <p className="text-white/90 text-sm sm:text-base font-medium">
                    {item.caption}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
