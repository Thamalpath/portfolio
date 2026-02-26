export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "onimta-it",
    company: "Onimta IT Solutions",
    role: "Full-Stack Software Engineer",
    location: "Colombo, Sri Lanka",
    period: "2025 - Present",
    description:
      "Developing and maintaining large-scale enterprise solutions including CRM, ERP, and distribution systems.",
    achievements: [
      "Led the development of a unified CRM and e-commerce platform.",
      "Optimized RESTful API performance by 40% using advanced Laravel caching strategies.",
      "Implemented complex inventory management workflows (PO, GRN, SRN).",
      "Built real-time order tracking and distribution logic for logistics systems.",
    ],
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "intellect-choice",
    company: "Intellect Choice",
    role: "Software Developer (Individual Project)",
    location: "Remote",
    period: "2025",
    description:
      "Developed a comprehensive hotel reservation system for automated booking and billing management.",
    achievements: [
      "Architected a modular CRUD-based system for room allocation and billing.",
      "Integrated automated email receipt generation using Laravel Mail.",
      "Designed a responsive administrative dashboard for real-time reporting.",
    ],
    technologies: ["Laravel", "Bootstrap", "MySQL", "PHP"],
  },
  {
    id: "freelance",
    company: "Freelance / Portfolio Projects",
    role: "Full-Stack Developer",
    location: "Self-Employed",
    period: "2023 - 2025",
    description:
      "Built various web applications focusing on automation and modern UI/UX principles.",
    achievements: [
      "Developed a Smart School Management system with real-time analytics.",
      "Created a real-time Casino Table monitoring system for staff tracking.",
      "Built several high-performance portfolio sites using modern stacks.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Framer Motion",
    ],
  },
];
