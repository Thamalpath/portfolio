"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  activeColor?: string;
  href?: string;
}

export default function ActionButton({
  label,
  icon: Icon = ArrowUpRight,
  onClick,
  className,
  activeColor = "bg-neon-blue",
}: ActionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/20 pl-6 pr-2 py-2 rounded-full group transition-all hover:bg-white/10 text-white",
        className,
      )}
    >
      <span className="font-bold text-lg">{label}</span>
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500 shadow-lg",
          activeColor,
        )}
      >
        <Icon size={24} />
      </div>
    </motion.button>
  );
}
