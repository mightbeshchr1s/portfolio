"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { Mail, GitBranch, Link as LinkIcon } from "lucide-react";
import { contact } from "@/data/portfolio";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconMap: Record<string, typeof Mail> = {
  github: GitBranch,
  linkedin: LinkIcon,
  email: Mail,
};

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 px-6">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-xl mx-auto text-center"
      >
        <motion.span variants={fadeUp} className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 rounded-full">
          {contact.badge}
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-3">
          {contact.title}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-text-muted mb-10">
          {contact.description}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-8">
          {contact.social.map((s) => {
            const Icon = iconMap[s.icon] || Mail;
            return (
              <motion.a
                key={s.name}
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-text-muted hover:border-accent/30 hover:text-accent transition-all"
              >
                <Icon className="w-4 h-4" />
                {s.name}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp}>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            {contact.email}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
