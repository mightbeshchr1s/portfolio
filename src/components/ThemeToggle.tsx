"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sun, Moon, Monitor } from "lucide-react";

const modes = [
  { key: "light", icon: Sun },
  { key: "dark", icon: Moon },
  { key: "system", icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = modes.find((m) => m.key === theme) ?? modes[2];
  const next = modes[(modes.indexOf(current) + 1) % modes.length];

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => setTheme(next.key)}
      className="fixed bottom-6 left-6 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink-light)] hover:text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors shadow-sm"
      aria-label={`Switch to ${next.key} mode`}
    >
      <next.icon className="w-4 h-4" />
    </motion.button>
  );
}
