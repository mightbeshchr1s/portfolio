"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const accents = ["bg-accent/10", "bg-accent-2/10", "bg-purple-500/10"];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-24 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-5xl mx-auto"
      >
        <motion.span variants={fadeUp} className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full">
          {projects.badge}
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-3">
          {projects.title}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-text-muted mb-12 max-w-lg">
          {projects.description}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.list.map((p, idx) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-accent/20 transition-colors duration-300"
            >
              {/* Cover */}
              <div className={`h-36 ${accents[idx % accents.length]} flex items-center justify-center border-b border-border`}>
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-3 border-t border-border">
                  <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors">
                    <ExternalLink className="w-3 h-3" /> Live
                  </a>
                  <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors">
                    <Code2 className="w-3 h-3" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
