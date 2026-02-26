"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { experiences } from "@/lib/experience";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 280, damping: 25 },
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

export default function ExperienceShowcase() {
  return (
    <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden rounded-[35px] md:rounded-[50px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#030014]">
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[140px] pointer-events-none bg-neon-blue/5" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none bg-neon-purple/5" />
      </div>

      <div className="absolute inset-0 z-10 custom-scroll overflow-y-auto overflow-x-hidden">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-[1400px] mx-auto w-full">
          {/* ── Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-neon-blue" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-neon-blue">
                Professional Path
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-none mb-4">
              Work <span className="text-neon-blue">Experience</span>
            </h1>
            <p className="text-xs sm:text-base text-white/50 max-w-2xl font-medium leading-relaxed">
              My professional journey as a software engineer, from building
              enterprise systems to crafting intuitive digital experiences.
            </p>
          </motion.div>

          {/* ── Timeline Grid ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative space-y-6 sm:space-y-8 pb-20"
          >
            {/* Timeline Line */}
            {/* <div className="absolute left-[31px] top-4 bottom-24 w-px bg-linear-to-b from-neon-blue/30 via-neon-purple/20 to-transparent hidden sm:block" /> */}

            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 pl-10 md:pl-0"
              >
                {/* Timeline Dot */}
                {/* <div className="absolute left-[31px] -translate-x-1/2 top-2 md:top-1.5 w-3.5 h-3.5 rounded-full bg-black border-[3px] border-neon-blue z-20 shadow-[0_0_12px_rgba(0,240,255,0.4)]" /> */}

                {/* Company Info */}
                <div className="md:w-[200px] shrink-0 pt-1">
                  <div className="flex items-center gap-2 text-neon-blue/80 mb-2">
                    <Calendar size={13} />
                    <span className="text-[11px] font-bold uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white group-hover:text-neon-blue transition-colors leading-tight">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/40 mt-1">
                    <MapPin size={11} />
                    <span className="text-[10px] font-medium">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card p-5 sm:p-7 rounded-[24px] sm:rounded-[32px] hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute -inset-24 bg-neon-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-neon-blue/10 border border-neon-blue/20">
                          <Briefcase size={18} className="text-neon-blue" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          {exp.role}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-white/60 mb-6 font-medium leading-relaxed italic">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3 mb-8">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex gap-3 group/item">
                          <CheckCircle2
                            size={16}
                            className="text-neon-blue mt-0.5 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity"
                          />
                          <p className="text-sm text-white/70 leading-relaxed group-hover/item:text-white transition-colors">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-widest hover:border-neon-blue/30 hover:text-white transition-all cursor-default"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
