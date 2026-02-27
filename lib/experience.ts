export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  // description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "onimta-it",
    company: "Onimta IT Solutions",
    role: "Associate Full-Stack Software Engineer",
    location: "Colombo, Sri Lanka",
    period: "2025 - Present",
    // description:
    //   "Developing and maintaining large-scale enterprise solutions including CRM, ERP, and distribution systems.",
    achievements: [
      "Developed and maintained full-stack applications for distribution, CRM, reservation, and real-time management systems using React JS, Next JS, Laravel, Tailwind CSS, MySQL, and SQL Server.",
      "Built secure RESTful APIs and optimized database schemas, improving system accuracy, scalability, and seamless client–server communication.",
      "Implemented role-based access control, dashboards, and business workflows across multiple platforms, enhancing security and usability.",
      "Enhanced UI/UX by creating responsive, accessible, and component-driven frontends while participating in code reviews, debugging, and agile team collaboration.",
    ],
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Tailwind CSS",
      "SQL Server",
      "Shadcn UI",
      "Vue.js",
    ],
  },
  {
    id: "intellect-choice",
    company: "Intellect Choice IT Solutions",
    role: "Intern Full-Stack Software Engineer",
    location: "Remote",
    period: "2024 - 2025",
    // description:
    //   "Developed a comprehensive hotel reservation system for automated booking and billing management.",
    achievements: [
      "Built and optimized full-stack web applications using React, Laravel, Tailwind CSS, Node.js, and MySQL with a focus on performance, scalability, and responsive design.",
      "Implemented secure RBAC modules and structured API endpoints, ensuring data protection and smooth system integration.",
      "Developed education and analytics platforms, including student performance tracking and teacher dashboards with real-time insights.",
      "Designed and maintained RESTful APIs and relational databases to support real time processing and internal administrative workflows.",
      "Improved UI/UX quality by enhancing frontend components with Tailwind CSS and contributing to code reviews, debugging, and agile development practices.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Laravel",
      "MySQL",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  // {
  //   id: "freelance",
  //   company: "Freelance / Portfolio Projects",
  //   role: "Full-Stack Developer",
  //   location: "Self-Employed",
  //   period: "2023 - 2025",
  //   description:
  //     "Built various web applications focusing on automation and modern UI/UX principles.",
  //   achievements: [
  //     "Developed a Smart School Management system with real-time analytics.",
  //     "Created a real-time Casino Table monitoring system for staff tracking.",
  //     "Built several high-performance portfolio sites using modern stacks.",
  //   ],
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express.js",
  //     "PostgreSQL",
  //     "Framer Motion",
  //   ],
  // },
];
