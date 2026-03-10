"use client";

import { Github, Linkedin, Mail, Globe, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

interface RightSidePanelProps {
  name: string;
}

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Thamalpath",
    label: "GitHub",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/thamalpath-liyanage/",
    label: "LinkedIn",
    color: "hover:text-[#0077b5]",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=thamalpathsathimantha3@gmail.com",
    label: "Email",
    color: "hover:text-[#ea4335]",
  },
  { icon: Globe, href: "#", label: "Website", color: "hover:text-neon-blue" },
];

export const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-100" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
];

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 15,
} as const;

export default function RightSidePanel({ name }: RightSidePanelProps) {
  return (
    <GlassCard
      rounded="rounded-[40px] md:rounded-[50px]"
      className="h-full flex flex-col gap-8 relative overflow-hidden group"
      padding="p-8"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-neon-blue/20 transition-colors duration-500" />

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black tracking-tight">{name}</h2>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neon-blue">
              Full-Stack Developer
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl border-2 border-white/10 p-1.5 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full rounded-xl bg-linear-to-tr from-neon-blue to-emerald-500 shadow-[0_0_20px_rgba(0,240,255,0.3)]" />
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mt-2">
          Building high-performance scalable systems with modern technologies.
          Focused on architecture and user experience.
        </p>
      </div>

      {/* Social Links */}
      <div className="relative z-10">
        <h3 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4 flex items-center gap-2">
          <Sparkles size={14} className="text-neon-blue" />
          Connect
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              whileHover={{ y: -8, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-colors duration-300",
                link.color,
                "hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
              )}
            >
              <link.icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="relative z-10 flex-1 flex flex-col min-h-0">
        <h3 className="text-xs font-bold uppercase tracking-widest opacity-40">
          Tech Stack
        </h3>
        <div className="flex-1 pr-2">
          <div className="custom-scroll h-full overflow-y-auto overflow-x-visible">
            <div className="grid grid-cols-4 gap-4 py-4 px-2">
              {techStack.map((tech, index) => (
                <TechItem key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Media Pulse (Visual Element) */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
    </GlassCard>
  );
}

function TechItem({
  tech,
  index,
}: {
  tech: (typeof techStack)[0];
  index: number;
}) {
  return (
    <div
      className="flex items-center justify-center group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.2 + index * 0.05,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{
          scale: 1.1,
          y: -10,
          rotateY: 15,
          rotateX: -10,
          z: 50,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
          },
        }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-500 cursor-pointer shadow-lg relative preserve-3d transform-gpu",
          "hover:bg-white/10 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]",
          tech.color,
        )}
      >
        {/* Shine/Refraction Effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <tech.icon size={22} className="relative z-10" />
      </motion.div>
    </div>
  );
}
