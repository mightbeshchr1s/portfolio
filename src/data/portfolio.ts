export const site = {
  title: "Your Name",
  tagline: "Frontend Developer & UI Engineer",
  description:
    "I build fast, accessible, and delightful web experiences with modern tools.",
  url: "https://yourusername.github.io/portfolio",
  domain: "portfolio",
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Your Name",
  subtitle: "I craft interfaces that users love.",
  roles: ["Frontend Developer", "UI/UX Designer", "Creative Technologist"],
  cta: { label: "See My Work", href: "#projects" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
};

export const about = {
  badge: "About",
  title: "Who I Am",
  paragraphs: [
    "I'm a frontend developer based in [Your City], with a passion for building performant, accessible web applications. I specialize in React, Next.js, and the modern JavaScript ecosystem.",
    "When I'm not coding, you'll find me [hobby/interests placeholder]. I believe great design is invisible — it just feels right.",
    "I'm always open to new opportunities and collaborations. Let's build something great together.",
  ],
  avatar: "/avatar-placeholder.svg",
  resumeUrl: "#",
};

export const skills = {
  badge: "Skills",
  title: "Tools & Technologies",
  categories: [
    {
      name: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      name: "Design",
      items: [
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 78 },
        { name: "Design Systems", level: 82 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      name: "Tools",
      items: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ],
};

export const projects = {
  badge: "Projects",
  title: "Things I've Built",
  description: "A selection of projects that showcase my skills and interests.",
  list: [
    {
      title: "Project Alpha",
      description:
        "A full-stack web application built with Next.js and Supabase. Features real-time collaboration, authentication, and a sleek dark-mode UI.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      image: "/project-placeholder.svg",
      links: { live: "https://example.com", github: "https://github.com" },
    },
    {
      title: "Manila City Guide",
      description:
        "Interactive travel guide with 3D elements, smooth page transitions, and robot mascot. Covers 6 categories of Manila attractions with dark/light theme support.",
      tags: ["Next.js", "Motion", "Tailwind", "3D"],
      image: "/project-placeholder.svg",
      links: { live: "https://example.com", github: "https://github.com" },
    },
    {
      title: "Dashboard Pro",
      description:
        "Analytics dashboard with interactive charts, data tables, and export functionality. Built with React and D3.js for data visualization.",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "/project-placeholder.svg",
      links: { live: "https://example.com", github: "https://github.com" },
    },
    {
      title: "E-Commerce Store",
      description:
        "Modern e-commerce platform with cart, checkout, and payment integration. Optimized for performance and SEO with a 95+ Lighthouse score.",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      image: "/project-placeholder.svg",
      links: { live: "https://example.com", github: "https://github.com" },
    },
    {
      title: "Weather App",
      description:
        "Real-time weather app with 7-day forecasts, interactive maps, and location-based updates. PWA with offline support.",
      tags: ["React", "PWA", "OpenWeather API", "Mapbox"],
      image: "/project-placeholder.svg",
      links: { live: "https://example.com", github: "https://github.com" },
    },
    {
      title: "DevBlog",
      description:
        "Personal developer blog with MDX support, syntax highlighting, RSS feed, and a tag-based content system.",
      tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
      image: "/project-placeholder.svg",
      links: { live: "https://example.com", github: "https://github.com" },
    },
  ],
};

export const experience = {
  badge: "Experience",
  title: "Where I've Worked",
  jobs: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "Jan 2024 — Present",
      description:
        "Leading the frontend team in building a SaaS platform. Migrated legacy codebase to Next.js, improved Lighthouse scores by 40%, and established the component library.",
      tags: ["Next.js", "TypeScript", "Storybook", "GraphQL"],
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "Mar 2022 — Dec 2023",
      description:
        "Built responsive web applications for clients across fintech, healthcare, and e-commerce. Introduced automated testing and code review practices.",
      tags: ["React", "TypeScript", "Jest", "Cypress"],
    },
    {
      role: "Junior Developer",
      company: "StartupXYZ",
      period: "Jun 2021 — Feb 2022",
      description:
        "Developed and maintained the company's React-based dashboard. Collaborated with design team to implement pixel-perfect UI components.",
      tags: ["React", "SCSS", "Node.js", "MongoDB"],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "Jan 2020 — May 2021",
      description:
        "Designed and built websites for small businesses. Managed client relationships from concept to deployment.",
      tags: ["HTML/CSS", "JavaScript", "WordPress", "Shopify"],
    },
  ],
};

export const contact = {
  badge: "Contact",
  title: "Let's Talk",
  description: "Have a project in mind or just want to say hi? Drop me a message!",
  email: "hello@yourname.com",
  social: [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
    { name: "Email", url: "mailto:hello@yourname.com", icon: "email" },
  ],
};

export const footer = {
  text: `© ${new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.`,
};
