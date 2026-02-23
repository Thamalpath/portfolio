"use client";

import { Heart, Star, Bookmark, Download, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  color: string;
}

function StatItem({ icon: Icon, label, color }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1 group cursor-default">
      <Icon
        size={18}
        className={cn(color, "transition-transform group-hover:scale-110")}
      />
      <span className="text-[10px] font-bold opacity-60 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function ProjectStats() {
  return (
    <div className="flex justify-center md:justify-start w-full">
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] md:rounded-[40px] px-6 md:px-8 py-3 flex items-center justify-between md:justify-start gap-4 md:gap-10 shadow-lg w-full md:w-auto">
        <div className="flex items-center gap-4 md:gap-10">
          <StatItem icon={Heart} label="6.4k" color="text-red-400" />
          <div className="h-6 w-px bg-white/10" />
          <StatItem icon={Star} label="4.8k" color="text-yellow-400" />
          <div className="h-6 w-px bg-white/10" />
          <StatItem icon={Bookmark} label="9.8k" color="text-neon-blue" />
        </div>

        <div className="p-3 bg-neon-blue rounded-full text-black hover:scale-110 transition-transform cursor-pointer shrink-0">
          <Download size={18} />
        </div>
      </div>
    </div>
  );
}
