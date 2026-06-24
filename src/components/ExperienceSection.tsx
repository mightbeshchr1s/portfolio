"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { experience } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-4 bg-surface-alt/50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-4xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full"
        >
          {experience.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-primary font-heading mb-14"
        >
          {experience.title}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experience.jobs.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative md:pl-14"
              >
                <div className="hidden md:block absolute left-[11px] top-1.5 w-[17px] h-[17px] rounded-full border-2 border-accent bg-surface z-10" />

                <div className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-primary font-heading">{job.role}</h3>
                      <p className="text-sm text-accent font-medium">{job.company}</p>
                    </div>
                    <span className="text-xs text-text-muted shrink-0">{job.period}</span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
