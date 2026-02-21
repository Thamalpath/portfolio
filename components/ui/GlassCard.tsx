"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  padding?: string;
  rounded?: string;
}

export default function GlassCard({
  children,
  className,
  padding = "p-6",
  rounded = "rounded-[40px]",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-3xl border border-white/5 shadow-2xl overflow-hidden",
        padding,
        rounded,
        className,
      )}
    >
      {children}
    </div>
  );
}
