"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { User } from "lucide-react";
import { about } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-4xl mx-auto"
      >
        <motion.span variants={fadeUp} className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full">
          {about.badge}
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-10">
          {about.title}
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-text-muted leading-relaxed">
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeUp} className="shrink-0">
            <div className="w-40 h-40 rounded-2xl bg-surface-alt border border-border flex items-center justify-center">
              <User className="w-16 h-16 text-text-muted opacity-30" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
