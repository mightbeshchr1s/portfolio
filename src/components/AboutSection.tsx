"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { Download } from "lucide-react";
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
    <section id="about" className="py-24 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-5xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full"
        >
          {about.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-10"
        >
          {about.title}
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-text-muted leading-relaxed text-base md:text-lg">
                {p}
              </motion.p>
            ))}
            <motion.div variants={fadeUp}>
              <motion.a
                href={about.resumeUrl}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium shadow-md shadow-accent/20 hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="shrink-0"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 border border-border flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-text-muted opacity-40">
                <circle cx="50" cy="35" r="20" fill="currentColor" />
                <ellipse cx="50" cy="75" rx="30" ry="25" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
