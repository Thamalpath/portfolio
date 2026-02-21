"use client";

import GlassCard from "@/components/ui/GlassCard";

interface ProfileHeaderProps {
  name: string;
}

export default function ProfileHeader({ name }: ProfileHeaderProps) {
  return (
    <GlassCard
      rounded="rounded-[40px]"
      className="flex items-center justify-between"
    >
      <div className="flex flex-col">
        <span className="text-xl font-bold">{name}</span>
      </div>
      <div className="w-12 h-12 rounded-full border-2 border-neon-blue p-1 overflow-hidden">
        <div className="w-full h-full rounded-full bg-linear-to-tr from-cyan-500 to-emerald-500" />
      </div>
    </GlassCard>
  );
}
