"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sparkles, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
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

import { toast } from "sonner";

export default function ContactShowcase() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (result.success) {
        setFormState({ name: "", email: "", message: "" });
        toast.success("Message sent! I'll get back to you soon.");
      } else {
        toast.error(result.error || "Execution failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden rounded-[35px] md:rounded-[50px]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-[#030014]">
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[140px] pointer-events-none bg-neon-blue/5" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none bg-neon-purple/5" />
      </div>

      <div className="absolute inset-0 z-10 custom-scroll overflow-y-auto overflow-x-hidden">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-[1400px] mx-auto w-full">
          {/* ── Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 sm:mb-12 text-center flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-neon-blue" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-neon-blue">
                Contact
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tight leading-none mb-4">
              Get In <span className="text-neon-blue italic">Touch</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/50 max-w-xl font-medium leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to
              reach out using the form below.
            </p>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto pb-4"
          >
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 sm:p-10 md:p-12 rounded-[30px] sm:rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-blue to-neon-purple opacity-50" />

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all text-white placeholder:text-white/50"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all text-white placeholder:text-white/50"
                      placeholder="hello@example.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 text-sm font-medium focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all text-white resize-none placeholder:text-white/50"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full bg-neon-blue text-black font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-[0_10px_30px_rgba(0,240,255,0.3)] flex items-center justify-center gap-3 transition-all",
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-[0_15px_40px_rgba(0,240,255,0.4)]",
                  )}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
