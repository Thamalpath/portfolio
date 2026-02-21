"use client";

import { Twitch, Instagram, Play } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ProjectShowcase() {
  return (
    <GlassCard
      rounded="rounded-[50px]"
      className="flex-1 flex flex-col justify-between relative group"
      padding="p-8"
    >
      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest opacity-50">
            Latest Architecture
          </span>
          <h2 className="text-2xl font-black leading-tight mt-1">
            Quantum Systems
          </h2>
          <span className="text-xs opacity-40 mt-1 block">
            Full-stack Framework 2024
          </span>
        </div>

        <div className="flex gap-4">
          <Twitch className="text-[#9146ff] cursor-pointer hover:scale-110 transition-transform" />
          <Instagram className="text-pink-500 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Trailer/Media Card Embedded */}
      <div className="relative w-full aspect-square rounded-[40px] overflow-hidden border border-white/10 mt-6 md:mt-0 group/trailer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/trailer:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover/trailer:bg-black/20 transition-all" />

        <div className="absolute bottom-4 left-0 w-full flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center text-black mb-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <Play size={20} fill="currentColor" />
          </div>
          <span className="text-sm font-bold tracking-widest uppercase">
            View Demo
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
