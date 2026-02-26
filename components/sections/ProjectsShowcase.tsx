"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { ArrowUpRight, Sparkles, Zap, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

/* ─────────────────────────────────────────────
   Shared Framer-Motion variants
───────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 28, delay: 0.05 },
  },
};

/* ─────────────────────────────────────────────
   Status config
───────────────────────────────────────────── */
const statusConfig = {
  Live: {
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    dot: "bg-emerald-400",
  },
  "In Progress": {
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
    dot: "bg-amber-400",
  },
  Archived: {
    color: "text-gray-400",
    bg: "bg-gray-400/10 border-gray-400/20",
    dot: "bg-gray-400",
  },
};

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function ProjectsShowcase() {
  const router = useRouter();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden rounded-[35px] md:rounded-[50px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#030014]">
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-[-15%] right-[-10%] w-[55%] h-[55%] rounded-full blur-[140px] pointer-events-none bg-neon-blue/8" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full blur-[120px] pointer-events-none bg-neon-purple/6" />
      </div>

      {/* Scrollable content */}
      <div className="absolute inset-0 z-10 custom-scroll overflow-y-auto overflow-x-hidden">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-[1400px] mx-auto w-full">
          {/* ── Page Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 sm:mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={13} className="text-neon-blue" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-neon-blue">
                Portfolio
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-none">
              My{" "}
              <span
                className="text-neon-blue"
                style={{ textShadow: "0 0 30px rgba(0,240,255,0.45)" }}
              >
                Projects
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
              A showcase of products and platforms I&apos;ve built — blending
              performance, scalability, and thoughtful user experience. Select
              any card to dive into the details of each project.
            </p>
          </motion.div>

          {/* ── Featured Grid ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionLabel accent="neon">Featured</SectionLabel>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {featuredProjects.map((project) => (
                <FeaturedCard
                  key={project.id}
                  project={project}
                  onClick={() => router.push(`/projects/${project.id}`)}
                />
              ))}
            </div>

            {/* ── More Work Grid ── */}
            {otherProjects.length > 0 && (
              <>
                <SectionLabel accent="dim">More Work</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {otherProjects.map((project) => (
                    <SmallCard
                      key={project.id}
                      project={project}
                      onClick={() => router.push(`/projects/${project.id}`)}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          <div className="h-6 sm:h-10" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Featured Card
───────────────────────────────────────────── */
function FeaturedCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      variants={cardVariants}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="relative group text-left rounded-2xl sm:rounded-3xl overflow-hidden border border-white/8 bg-white/3 backdrop-blur-sm w-full focus:outline-none"
      style={{
        boxShadow: hovered
          ? `0 16px 56px rgba(0,0,0,0.55), 0 0 0 1px ${project.accentColor}25`
          : "0 4px 24px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
        }}
      />

      {/* Hover radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        style={{
          background: `radial-gradient(ellipse at 50% -5%, ${project.accentColor}1a 0%, transparent 68%)`,
        }}
      />

      {/* Card body */}
      <div className="relative z-10 p-5 sm:p-6 md:p-7 flex flex-col min-h-[200px] sm:min-h-[240px]">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="text-[10px] text-white/30 font-mono">
              {project.year}
            </span>
          </div>

          {/* ── Animated ArrowUpRight ── */}
          <motion.div
            animate={
              hovered
                ? {
                    rotate: 45,
                    scale: 1.15,
                    backgroundColor: `${project.accentColor}22`,
                    borderColor: `${project.accentColor}55`,
                    color: project.accentColor,
                  }
                : {
                    rotate: 0,
                    scale: 1,
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.30)",
                  }
            }
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center shrink-0"
            style={{
              boxShadow: hovered ? `0 0 14px ${project.accentColor}35` : "none",
            }}
          >
            <ArrowUpRight size={15} />
          </motion.div>
        </div>

        {/* Title & tagline */}
        <div className="flex-1">
          <motion.h3
            animate={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.88)" }}
            transition={{ duration: 0.25 }}
            className="text-lg sm:text-xl md:text-2xl font-black mb-1.5 leading-tight"
          >
            {project.title}
          </motion.h3>
          <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-4 sm:mt-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <motion.span
              key={tech}
              animate={
                hovered
                  ? {
                      borderColor: "rgba(255,255,255,0.18)",
                      color: "rgba(255,255,255,0.6)",
                    }
                  : {
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.35)",
                    }
              }
              transition={{ duration: 0.25 }}
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border"
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/8 text-white/25">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        animate={{ opacity: hovered ? 0.6 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
        }}
      />
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   Small Card (More Work)
───────────────────────────────────────────── */
function SmallCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      variants={cardVariants}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.975 }}
      className="relative group text-left rounded-xl sm:rounded-2xl overflow-hidden border border-white/8 bg-white/3 backdrop-blur-sm w-full focus:outline-none"
      style={{
        boxShadow: hovered
          ? `0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}20`
          : "0 4px 16px rgba(0,0,0,0.35)",
        transition: "box-shadow 0.35s ease",
      }}
    >
      {/* Top accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        animate={{ opacity: hovered ? 0.85 : 0.35 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
        }}
      />

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse at 50% -5%, ${project.accentColor}14 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 p-4 sm:p-5 flex flex-col min-h-[170px] sm:min-h-[190px]">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <StatusBadge status={project.status} />

          {/* ── Animated ArrowUpRight ── */}
          <motion.div
            animate={
              hovered
                ? {
                    rotate: 45,
                    scale: 1.15,
                    backgroundColor: `${project.accentColor}1e`,
                    borderColor: `${project.accentColor}45`,
                    color: project.accentColor,
                  }
                : {
                    rotate: 0,
                    scale: 1,
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.30)",
                  }
            }
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="w-7 h-7 rounded-lg border flex items-center justify-center shrink-0"
            style={{
              boxShadow: hovered ? `0 0 10px ${project.accentColor}28` : "none",
            }}
          >
            <ArrowUpRight size={13} />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3
          animate={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.83)" }}
          transition={{ duration: 0.22 }}
          className="text-base sm:text-lg font-black mb-1 leading-tight"
        >
          {project.title}
        </motion.h3>

        {/* Tagline */}
        <p className="text-[11px] sm:text-xs text-white/38 leading-relaxed flex-1">
          {project.tagline}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-white/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
function SectionLabel({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: "neon" | "dim";
}) {
  return (
    <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
      <span
        className={cn(
          "w-5 h-px",
          accent === "neon" ? "bg-neon-blue/70" : "bg-white/20",
        )}
      />
      <span
        className={cn(
          "text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em]",
          accent === "neon" ? "text-neon-blue/70" : "text-white/30",
        )}
      >
        {children}
      </span>
    </div>
  );
}

function StatusBadge({ status }: { status: keyof typeof statusConfig }) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border",
        config.bg,
        config.color,
      )}
    >
      <span
        className={cn(
          "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full animate-pulse",
          config.dot,
        )}
      />
      {status}
    </span>
  );
}
