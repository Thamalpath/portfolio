"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Rocket, Code2, Briefcase, Mail, LucideIcon } from "lucide-react";

interface SidebarProps {
  activeTab?: string;
}

const navItems = [
  { id: "home", icon: Home, label: "Home", href: "/" },
  {
    id: "projects",
    icon: Rocket,
    label: "Projects",
    href: "/projects",
  },
  { id: "skills", icon: Code2, label: "Skills", href: "/skills" },
  {
    id: "experience",
    icon: Briefcase,
    label: "Experience",
    href: "/experience",
  },
  { id: "contact", icon: Mail, label: "Contact", href: "/contact" },
];

export default function ShowcaseSidebar({ activeTab = "home" }: SidebarProps) {
  const router = useRouter();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col gap-4 py-10 px-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[45px] h-fit self-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-50">
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.id}
              onClick={() => router.push(item.href)}
            />
          ))}
        </div>
      </aside>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-2 p-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full z-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {navItems.map((item) => (
          <MobileNavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeTab === item.id}
            onClick={() => router.push(item.href)}
          />
        ))}
      </div>
    </>
  );
}

function MobileNavItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      title={label}
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative",
        active
          ? "bg-neon-blue text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white",
      )}
    >
      <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      {active && (
        <motion.div
          layoutId="mobileActiveGlow"
          className="absolute -inset-1 bg-neon-blue/20 blur-md rounded-full -z-10"
        />
      )}
    </motion.div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
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
        onClick={onClick}
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
            className="absolute left-full ml-4 px-4 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl text-white text-sm font-bold whitespace-nowrap shadow-2xl pointer-events-none z-100"
          >
            <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white/10 border-l border-t border-white/20 -rotate-45" />
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
