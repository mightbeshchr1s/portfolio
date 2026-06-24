"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { TiltCard } from "./TiltCard";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-6xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full"
        >
          {projects.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-3"
        >
          {projects.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-text-muted mb-12 max-w-xl"
        >
          {projects.description}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.list.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <TiltCard maxTilt={8}>
                <div className="group h-full rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:shadow-accent/5 transition-shadow duration-300">
                  <div className="h-40 bg-gradient-to-br from-accent/10 to-accent-2/10 flex items-center justify-center border-b border-border">
                    <svg viewBox="0 0 80 80" className="w-16 h-16 text-text-muted opacity-30">
                      <rect x="10" y="10" width="60" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M 25 35 L 55 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 25 45 L 45 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 25 55 L 50 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="font-bold text-primary font-heading group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2 border-t border-border">
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Live
                      </a>
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                      >
                        <Code2 className="w-3 h-3" /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
