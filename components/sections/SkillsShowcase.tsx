"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sparkles, Code2, Layers, Database, Cpu, Terminal } from "lucide-react";
import { skills } from "@/lib/skills";
import type { Skill } from "@/lib/skills";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Shared Framer-Motion variants
 ───────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 25 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

/* ─────────────────────────────────────────────
   Category Config
 ───────────────────────────────────────────── */
const categoryConfig = {
  Frontend: {
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/5",
    border: "border-blue-400/10",
    accent: "#60a5fa",
  },
  Backend: {
    icon: Layers,
    color: "text-purple-400",
    bg: "bg-purple-400/5",
    border: "border-purple-400/10",
    accent: "#a78bfa",
  },
  Database: {
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-400/5",
    border: "border-emerald-400/10",
    accent: "#34d399",
  },
  Tools: {
    icon: Terminal,
    color: "text-amber-400",
    bg: "bg-amber-400/5",
    border: "border-amber-400/10",
    accent: "#fbbf24",
  },
  DevOps: {
    icon: Cpu,
    color: "text-rose-400",
    bg: "bg-rose-400/5",
    border: "border-rose-400/10",
    accent: "#fb7185",
  },
};

export default function SkillsShowcase() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden rounded-[35px] md:rounded-[50px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#030014]">
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-[-15%] right-[-10%] w-[55%] h-[55%] rounded-full blur-[140px] pointer-events-none bg-neon-blue/5" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[120px] pointer-events-none bg-neon-purple/5" />
      </div>

      {/* Main Scroller */}
      <div className="absolute inset-0 z-10 custom-scroll overflow-y-auto overflow-x-hidden">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-[1400px] mx-auto w-full">
          {/* ── Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="mb-6 sm:mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-neon-blue" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-neon-blue">
                Expertise
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tight leading-none mb-4">
              Professional <br />
              <span className="text-neon-blue text-glow-blue">Skill Set</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/50 max-w-2xl font-medium leading-relaxed">
              A comprehensive overview of my technical proficiencies and
              experimental knowledge in modern web technologies.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-4 xl:gap-6"
          >
            {categories.map((cat) => {
              const conf = categoryConfig[cat as keyof typeof categoryConfig];
              const catSkills = skills.filter((s) => s.category === cat);
              const CategoryIcon = conf.icon;

              return (
                <motion.div
                  key={cat}
                  variants={itemVariants}
                  className={cn(
                    "flex flex-col p-6 rounded-2xl border bg-black/40 backdrop-blur-xl group",
                    conf.border,
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "p-2 rounded-lg bg-black/40 border",
                        conf.border,
                      )}
                    >
                      <CategoryIcon size={18} className={conf.color} />
                    </div>
                    <h2 className="text-lg font-bold tracking-tight text-white/90">
                      {cat}
                    </h2>
                  </div>

                  <div className="space-y-7">
                    {catSkills.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className={cn(
                                "w-5 h-5 object-contain opacity-70 group-hover/skill:opacity-100 transition-opacity",
                                ["Express.js"].includes(skill.name) &&
                                  "brightness-0 invert",
                              )}
                            />
                            <span className="text-sm font-semibold text-white/70 group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.2,
                              ease: "circOut",
                              delay: 0.3,
                            }}
                            className="h-full rounded-full relative"
                            style={{ backgroundColor: conf.accent }}
                          >
                            {/* Inner glow */}
                            <div
                              className="absolute inset-0 blur-4px opacity-40"
                              style={{ backgroundColor: conf.accent }}
                            />
                          </motion.div>
                        </div>

                        <p className="mt-2 text-[11px] text-white/40 leading-relaxed group-hover/skill:text-white/60 transition-colors">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
