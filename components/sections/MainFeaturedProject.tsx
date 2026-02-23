"use client";

import { motion } from "framer-motion";
import ActionButton from "@/components/ui/ActionButton";

interface MainFeaturedProjectProps {
  projectNumber: string;
  titlePrefix: string;
  titleSuffix: string;
}

export default function MainFeaturedProject({
  projectNumber,
  titlePrefix,
  titleSuffix,
}: MainFeaturedProjectProps) {
  return (
    <div className="relative flex-1 flex flex-col p-6 md:p-12 justify-between min-h-[400px] md:min-h-[500px]">
      {/* Background Video/Art Layer */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-[#1a1a1a] via-[#0d1b1b] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-neon-blue/5 mix-blend-color-dodge" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Character Video Silhouette */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-lighten opacity-120 brightness-80 contrast-120 transition-opacity duration-800"
          >
            <source src="/moonlit-ronin.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top Brand */}
        <div className="flex justify-between items-start">
          <span className="text-xl md:text-2xl font-black tracking-widest drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] uppercase">
            コデラボ
          </span>
        </div>

        {/* Branding Content */}
        <div className="max-w-md mt-auto mb-8 md:mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-60 mb-2 block text-center md:text-left">
            {projectNumber}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-10 tracking-tighter leading-tight font-mono text-center md:text-left">
            {titlePrefix} <span className="text-neon-blue">{titleSuffix}</span>
          </h1>

          <div className="flex justify-center md:justify-start">
            <ActionButton label="View Experience" />
          </div>
        </div>
      </div>
    </div>
  );
}
