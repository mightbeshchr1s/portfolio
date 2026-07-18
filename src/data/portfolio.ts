export const site = {
  title: "Chris",
  tagline: "2nd Year IT Student & Developer",
  description:
    "Building web and desktop applications that solve real problems.",
  url: "https://your4tune02-bit.github.io/portfolio",
  domain: "portfolio",
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Chris",
  subtitle: "2nd year IT student building practical apps across web and desktop.",
  roles: ["IT Student", "Web Developer", "Java Developer"],
  cta: { label: "See My Work", href: "#projects" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
};

export const about = {
  badge: "About",
  title: "Who I Am",
  paragraphs: [
    "I'm Chris, a 2nd year IT student who likes building things that actually work. I've shipped web apps with Next.js and desktop tools with JavaFX — always focused on clean code and making things easy to use.",
    "From an interactive Manila travel guide to a student collaboration platform, I enjoy turning ideas into working software. I'm always picking up new technologies and looking for the next thing to build.",
  ],
  avatar: "/avatar-placeholder.svg",
  resumeUrl: "#",
};

export const skills = {
  badge: "Skills",
  title: "Tech Stack",
  categories: [
    {
      name: "Web",
      items: [
        { name: "Next.js", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "React", level: 70 },
      ],
    },
    {
      name: "Desktop",
      items: [
        { name: "Java", level: 80 },
        { name: "JavaFX", level: 75 },
        { name: "Maven", level: 70 },
        { name: "SQLite", level: 65 },
      ],
    },
    {
      name: "Tools",
      items: [
        { name: "Git", level: 70 },
        { name: "VS Code", level: 85 },
        { name: "IntelliJ", level: 80 },
        { name: "Figma", level: 55 },
      ],
    },
  ],
};

export const projects = {
  badge: "Projects",
  title: "Selected Work",
  description: "Things I've built during my studies and personal time.",
  list: [
    {
      title: "Manila City Guide",
      description:
        "Interactive travel guide with 3D tilt cards, page transitions, animated mascot, and dark/light theme. Covers attractions, food, transport, and culture.",
      tags: ["Next.js", "TypeScript", "Motion", "Tailwind"],
      image: "/project-placeholder.svg",
      links: { live: "https://your4tune02-bit.github.io/portfolio", github: "https://github.com/your4tune02-bit/portfolio" },
    },
    {
      title: "SkillSync",
      description:
        "JavaFX desktop app for student project collaboration. Real-time chat, task boards, invitations, and skill-based team matching.",
      tags: ["Java", "JavaFX", "Maven", "SQLite"],
      image: "/project-placeholder.svg",
      links: { live: "#", github: "https://github.com/your4tune02-bit/SKILLSYNC" },
    },
    {
      title: "StockFlow",
      description:
        "Inventory and sales management with daily reporting, transaction tracking, and CSV export for business insights.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "/project-placeholder.svg",
      links: { live: "#", github: "https://github.com/your4tune02-bit/STOCKFLOW" },
    },
  ],
};

export const experience = {
  badge: "Experience",
  title: "My Journey",
  jobs: [
    {
      role: "2nd Year IT Student",
      company: "University",
      period: "2025 — Present",
      description:
        "Studying Information Technology with a focus on software development. Building projects across web and desktop platforms.",
      tags: ["Java", "Web Dev", "Databases", "OOP"],
    },
    {
      role: "Manila City Guide",
      company: "Personal Project",
      period: "2026",
      description:
        "Built a multi-page Next.js travel guide with 3D interactions, page transitions, and full dark/light theme support.",
      tags: ["Next.js", "Motion", "Tailwind", "TypeScript"],
    },
    {
      role: "SkillSync",
      company: "Academic Project",
      period: "2026",
      description:
        "Developed a JavaFX desktop app for project collaboration with chat, task management, and SQLite persistence.",
      tags: ["Java", "JavaFX", "SQLite", "OOP"],
    },
  ],
};

export const contact = {
  badge: "Contact",
  title: "Let's Connect",
  description: "Have a project idea or just want to say hi? Reach out.",
  email: "chocwebster@gmail.com",
  social: [
    { name: "GitHub", url: "https://github.com/your4tune02-bit", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/chris", icon: "linkedin" },
    { name: "Email", url: "mailto:chocwebster@gmail.com", icon: "email" },
  ],
};

export const footer = {
  text: `© ${new Date().getFullYear()} Chris. Built with Next.js & Tailwind CSS.`,
};
