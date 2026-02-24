"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { getProject } from "@/lib/projects";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Zap,
  Clock,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const statusConfig = {
  Live: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    dot: "bg-emerald-400",
  },
  "In Progress": {
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
    dot: "bg-amber-400",
  },
  Archived: {
    icon: Clock,
    color: "text-gray-400",
    bg: "bg-gray-400/10 border-gray-400/20",
    dot: "bg-gray-400",
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
};

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const router = useRouter();
  const project = getProject(projectId);

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-[#030014]">
        <p className="text-6xl sm:text-7xl font-black text-white/10 mb-4">
          404
        </p>
        <h2 className="text-xl sm:text-2xl font-black mb-2 text-white">
          Project Not Found
        </h2>
        <p className="text-sm text-white/40 mb-8">
          That project doesn&apos;t exist in the portfolio.
        </p>
        <button
          onClick={() => router.push("/projects")}
          className="flex items-center gap-2 px-5 py-2.5 bg-neon-blue/10 border border-neon-blue/30 rounded-xl text-neon-blue text-sm font-bold hover:bg-neon-blue/20 transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Projects
        </button>
      </div>
    );
  }

  const status = statusConfig[project.status];

  return (
    <div className="relative flex-1 flex flex-col overflow-hidden">
      {/* Background — same dark base as the rest of the portfolio */}
      <div className="absolute inset-0 z-0 bg-[#030014]">
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        {/* Accent glow derived from project color */}
        <div
          className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] rounded-full blur-[160px] pointer-events-none"
          style={{ background: `${project.accentColor}12` }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[130px] pointer-events-none"
          style={{ background: `${project.accentColor}08` }}
        />
      </div>

      {/* Scrollable Content */}
      <div className="custom-scroll relative z-10 flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-3xl xl:max-w-4xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ── Back Button ── */}
            <motion.button
              variants={itemVariants}
              onClick={() => router.push("/projects")}
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 mb-8 sm:mb-10 group"
            >
              <span className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/25 group-hover:bg-white/8 transition-all duration-200">
                <ArrowLeft size={14} />
              </span>
              <span className="font-semibold text-xs sm:text-sm">
                Back to Projects
              </span>
            </motion.button>

            {/* ── Header ── */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border",
                    status.bg,
                    status.color,
                  )}
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full animate-pulse",
                      status.dot,
                    )}
                  />
                  {project.status}
                </span>
                <span className="text-[10px] text-white/30 font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/8">
                  {project.year}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/30 px-2.5 py-1 rounded-full bg-white/5 border border-white/8">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-none mb-3 sm:mb-4">
                <span
                  style={{
                    color: project.accentColor,
                    filter: `drop-shadow(0 0 24px ${project.accentColor}50)`,
                  }}
                >
                  {project.title}
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-sm sm:text-base md:text-lg text-white/55 font-medium leading-relaxed">
                {project.tagline}
              </p>
            </motion.div>

            {/* ── Action Links ── */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10"
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-black transition-all duration-300"
                  style={{
                    background: project.accentColor,
                    boxShadow: `0 0 20px ${project.accentColor}45`,
                  }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                >
                  <Github size={14} />
                  Source Code
                </motion.a>
              )}
            </motion.div>

            {/* ── Divider ── */}
            <motion.div
              variants={itemVariants}
              className="h-px mb-8 sm:mb-10"
              style={{
                background: `linear-gradient(90deg, ${project.accentColor}50, transparent)`,
              }}
            />

            {/* ── About ── */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
              <SectionHeading
                accentColor={project.accentColor}
                label="About this project"
              />
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </motion.div>

            {/* ── Highlights ── */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
              <SectionHeading
                accentColor={project.accentColor}
                label="Key Highlights"
              />
              <ul className="space-y-2.5 sm:space-y-3">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.28 + index * 0.07,
                      type: "spring" as const,
                      stiffness: 280,
                      damping: 24,
                    }}
                    className="flex items-start gap-3 text-sm sm:text-base text-white/60 leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[0.45em] shrink-0"
                      style={{ background: project.accentColor }}
                    />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* ── Tech Stack ── */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
              <SectionHeading
                accentColor={project.accentColor}
                label="Tech Stack"
              />
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.3 + index * 0.05,
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider border text-white/70"
                    style={{
                      borderColor: `${project.accentColor}28`,
                      background: `${project.accentColor}0e`,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* ── Tags ── */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
              <SectionHeading accentColor={project.accentColor} label="Tags" />
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/8 text-white/35"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Footer Nav ── */}
            <motion.div
              variants={itemVariants}
              className="pt-5 sm:pt-6 border-t border-white/6 flex items-center justify-between"
            >
              <button
                onClick={() => router.push("/projects")}
                className="flex items-center gap-2 text-xs sm:text-sm text-white/35 hover:text-white transition-colors"
              >
                <ArrowLeft size={13} />
                All Projects
              </button>
              <span className="text-[10px] text-white/20 font-mono">
                {project.id}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Shared sub-component ── */
function SectionHeading({
  accentColor,
  label,
}: {
  accentColor: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-3 sm:mb-4">
      <Sparkles size={13} style={{ color: accentColor }} />
      <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/35">
        {label}
      </h2>
    </div>
  );
}
