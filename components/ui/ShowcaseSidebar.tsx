"use client";

import { Home, Briefcase, Code, History, Mail, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SidebarProps {
  activeTab?: string;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "experience", icon: History, label: "Experience" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function ShowcaseSidebar({ activeTab = "home" }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col gap-4 py-10 px-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[45px] h-fit self-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-50">
      <div className="flex flex-col gap-3">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeTab === item.id}
          />
        ))}
      </div>
    </aside>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotateY: 15,
          rotateX: -5,
          z: 20,
        }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 relative preserve-3d shadow-xl",
          "before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/20 before:pointer-events-none",
          active
            ? "bg-neon-blue text-black shadow-[0_0_30px_rgba(0,240,255,0.6)]"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white",
        )}
        style={{ perspective: "1000px" }}
      >
        <Icon size={24} strokeWidth={active ? 2.5 : 2} />

        {/* Active Glow Indicator */}
        {active && (
          <motion.div
            layoutId="activeGlow"
            className="absolute -inset-1 bg-neon-blue/20 blur-md rounded-3xl -z-10"
          />
        )}
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 20, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute left-full ml-4 px-4 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl text-white text-sm font-bold whitespace-nowrap shadow-2xl pointer-events-none z-[100]"
          >
            <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white/10 border-l border-t border-white/20 -rotate-45" />
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
