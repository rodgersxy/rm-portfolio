export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; 
  demoUrl: string;
  repoUrl: string;
  featured: boolean; 
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[]; 
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

// --- 2. THE DATA ( "Local API") ---

// NAVIGATION LINKS
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// PROJECTS
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Real Estate Marketplace",
    description:
      "A modern property listing platform allowing users to search, filter, and view detailed property insights. Implemented advanced search functionality and a secure admin dashboard for agents to manage listings and upload high-resolution images.",
    tags: ["Laravel", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"], 
    imageUrl: "/projects/project1.png", 
    demoUrl: "https://glorealtors.com/", 
    repoUrl: "https://github.com/rodgersxy", 
    featured: true,
  },
  {
    id: 2,
    title: "Tours & Travel Platform with Shop, Vendors & M-Pesa Payments",
    description:
      "A complete tours and travel platform featuring an online shop, vendor management, and seamless M-Pesa payments built for modern businesses.",
    tags: ["React", "Laravel", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    imageUrl: "/projects/project2.png",
    demoUrl: "https://www.journeypalette.co.ke/",
    repoUrl: "https://github.com/rodgersxy",
    featured: true,
  },
  {
    id: 3,
    title: "Socontra Tours and Travel website",
    description:
      "Modern Tours and Travel website with user authentication and booking capabilities. Utilized mpesa for secure payments and implemented a dynamic admin dashboard for managing tours.",
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    imageUrl: "/projects/project3.png",
    demoUrl: "https://www.socotratoursandtravel.com/",
    repoUrl: "https://github.com/rodgersxy",
    featured: false,
  },
];

// EXPERIENCE
export const experienceData: Experience[] = [
  {
    id: 1,
    company: "NYAWASCO", 
    role: "Software Developer & ICT Officer",
    period: "2025 - Present",
    description: [
      "Engineered an in-house mobile application for field agents to capture water meter coordinates, enabling precise geospatial mapping and customer categorization.",
      "Collaborating with the development team to build a custom Water Billing Software, aiming to automate revenue collection and reduce billing discrepancies.",
      "Spearheading digital transformation initiatives to digitize manual workflows and improve data accuracy across the organization.",
    ],
  },
  {
    id: 2,
    company: "Techlup Solutions", 
    role: "Full Stack Developer - Remote Freelancer",
    period: "2024 - Present",
    description: [
      "Developed custom web solutions for various clients using React, TypeScript, Node.js, and Laravel.",
      "Translated UI/UX designs into responsive, high-performance code.",
      "Optimized legacy applications for better SEO and load times.",
    ],
  },
];

// SKILLS
export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Zustand", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"],
  },
];