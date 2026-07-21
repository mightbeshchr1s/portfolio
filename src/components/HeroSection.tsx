"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { hero, skills } from "@/data/portfolio";
import { TechBadge } from "./TechBadge";

const allTech = skills.categories.flatMap((c) => c.items.map((i) => i.name));

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-paper-alt)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-border)] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
           className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-ink-lighter)] mb-6"
        >
          {hero.greeting}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
           className="text-6xl sm:text-7xl md:text-8xl font-bold text-[var(--color-ink)] mb-5 leading-[0.9]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
           className="text-lg sm:text-xl text-[var(--color-ink-light)] max-w-lg mx-auto leading-relaxed mb-4"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="h-8 flex items-center justify-center mb-8"
        >
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
             className="text-sm font-medium text-[var(--color-ink-lighter)]"
          >
            {hero.roles[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <a
            href={hero.cta.href}
             className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-ink)] text-[var(--color-paper)] text-sm font-medium rounded-full hover:bg-[var(--color-ink-light)] transition-all active:scale-95"
          >
            {hero.cta.label}
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href={hero.secondaryCta.href}
             className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border-dark)] text-[var(--color-ink-light)] text-sm font-medium rounded-full hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-all active:scale-95"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto"
        >
          {allTech.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.04, duration: 0.3 }}
            >
              <TechBadge name={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="text-[var(--color-ink-lighter)] hover:text-[var(--color-ink)] transition-colors block p-2">
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
