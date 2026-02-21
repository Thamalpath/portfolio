"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover opacity-60 grayscale brightness-[0.6]"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Colorful Eye-Catching Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-linear-to-tr from-neon-blue/20 via-transparent to-neon-purple/20 z-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-transparent to-background/80 z-10" />
        </div>

        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[140px] animate-pulse"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[160px] animate-pulse"
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-150 z-20" />
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 90%)",
          }}
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-6 text-gray-300">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6"
        >
          Building the <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-neon-blue via-white to-neon-purple animate-gradient flex justify-center">
            Future of Web
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-Stack Software Engineer specialized in creating high-performance,
          visually stunning, and user-centric digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-neon-blue transition-colors duration-300"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 rounded-full glass border border-white/10 font-semibold hover:bg-white/5 transition-colors">
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              className="text-gray-500 hover:text-white transition-colors p-2 rounded-full border border-white/5 hover:border-white/20"
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero "Special Thing" - Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-white/5 rounded-[40%] mix-blend-screen"
            animate={
              {
                rotate: [0, 360],
                x: [0, 100, 0],
                y: [0, 50, 0],
              } as any
            }
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
