"use client";
import { footer } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-text-muted">{footer.text}</p>
        <div className="flex gap-4">
          <a href="#about" className="text-xs text-text-muted hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-xs text-text-muted hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-xs text-text-muted hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
