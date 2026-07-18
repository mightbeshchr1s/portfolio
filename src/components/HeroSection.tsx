"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { hero } from "@/data/portfolio";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Single accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full"
        >
          {hero.greeting}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 tracking-tight"
        >
          {hero.name.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }}
              className={ch === " " ? "" : "inline-block"}
              style={ch === " " ? { width: "0.3em" } : undefined}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-base md:text-lg text-text-muted mb-3 max-w-md mx-auto leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="h-7 flex items-center justify-center"
        >
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-accent font-medium"
          >
            {hero.roles[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          <motion.a
            href={hero.cta.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/25 transition-all"
          >
            {hero.cta.label}
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a
            href={hero.secondaryCta.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card text-text-muted text-sm font-medium border border-border hover:border-accent/30 hover:text-accent transition-all"
          >
            {hero.secondaryCta.label}
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="text-text-muted hover:text-accent transition-colors">
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
