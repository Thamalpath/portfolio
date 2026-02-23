"use client";

import GlassCard from "@/components/ui/GlassCard";

interface ProfileHeaderProps {
  name: string;
}

export default function ProfileHeader({ name }: ProfileHeaderProps) {
  return (
    <GlassCard
      rounded="rounded-[35px] md:rounded-[40px]"
      className="flex items-center justify-between"
      padding="p-4 md:p-6"
    >
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-bold">{name}</span>
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-neon-blue p-1 overflow-hidden">
        <div className="w-full h-full rounded-full bg-linear-to-tr from-cyan-500 to-emerald-500" />
      </div>
    </GlassCard>
  );
}
