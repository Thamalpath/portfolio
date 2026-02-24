export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  techStack: string[];
  year: string;
  status: "Live" | "In Progress" | "Archived";
  featured: boolean;
  accentColor: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "samudra-distribution",
    title: "Samudra Distribution System",
    tagline: "Enterprise distribution & inventory management platform",
    description:
      "A scalable full-stack distribution system with real-time inventory tracking, order lifecycle workflows, and role-based dashboards.",
    longDescription:
      "Samudra Distribution is a production-grade distribution management system developed to streamline business operations. Built using React and Laravel with MySQL, the platform enables real-time inventory tracking, order lifecycle monitoring, and secure role-based dashboards. Optimized REST APIs ensure seamless client–server communication while structured database schemas improve scalability and performance.",
    category: "Full-Stack",
    tags: ["Distribution", "Inventory", "Enterprise"],
    techStack: ["React", "Laravel", "MySQL", "REST API", "Tailwind CSS"],
    year: "2025",
    status: "Live",
    featured: true,
    accentColor: "#00f0ff",
    highlights: [
      "Real-time inventory tracking & order workflows",
      "Role-based access control (RBAC)",
      "Optimized RESTful API architecture",
      "Scalable relational database schema",
      "Responsive Tailwind-powered UI",
    ],
  },

  {
    id: "venpaa-crm",
    title: "Venpaa Book Shop CRM",
    tagline: "Customer relationship & sales workflow management system",
    description:
      "A secure CRM system built with Next.js and Laravel to manage customers, products, and sales operations efficiently.",
    longDescription:
      "Venpaa CRM is a full-stack business management system engineered to streamline customer data, product management, and sales workflows. Built with Next.js, Laravel, and MySQL, the platform features secure role-based permissions, optimized backend APIs, and intuitive dashboards. The system improves operational efficiency while ensuring data security and seamless integration between front-end and back-end services.",
    category: "Full-Stack",
    tags: ["CRM", "Sales", "Business Management"],
    techStack: ["Next.js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS"],
    year: "2025",
    status: "Live",
    featured: true,
    accentColor: "#b026ff",
    highlights: [
      "Secure role-based permission system",
      "Customer & product lifecycle management",
      "Optimized backend API structure",
      "Interactive analytics dashboard",
      "Enhanced UI/UX with Tailwind CSS",
    ],
  },

  {
    id: "hotel-reservation",
    title: "Hotel Reservation System",
    tagline: "Comprehensive booking & management solution",
    description:
      "A Laravel-based hotel management platform supporting bookings, billing, reporting, and automated email receipts.",
    longDescription:
      "Developed as an individual project at Intellect Choice, this hotel reservation system manages guest bookings, room allocation, restaurant billing, checkout processes, and reporting. Built using Laravel, Bootstrap, and MySQL, the system includes automated email receipt generation and multiple CRUD-based operational modules to ensure smooth hotel management workflows.",
    category: "Full-Stack",
    tags: ["Reservation", "Booking", "Automation"],
    techStack: ["Laravel", "Bootstrap", "MySQL", "PHP"],
    year: "2024",
    status: "Live",
    featured: true,
    accentColor: "#10b981",
    highlights: [
      "Room booking & availability management",
      "Restaurant billing integration",
      "Automated email receipt functionality",
      "Administrative reporting dashboard",
      "Modular CRUD-based architecture",
    ],
  },

  {
    id: "smart-school-system",
    title: "Smart School Management System",
    tagline: "Real-time academic tracking & analytics platform",
    description:
      "A full-featured school management system with real-time attendance, academic analytics, and administrative workflows.",
    longDescription:
      "Built as a group project, this Smart School Management System enables real-time attendance tracking, student and teacher record management, and academic performance analytics. Developed using React, Express.js, and MySQL, the platform includes dynamic dashboards that provide actionable insights for school administrators.",
    category: "Full-Stack",
    tags: ["Education", "Analytics", "Real-time"],
    techStack: ["React", "Express.js", "MySQL", "Tailwind CSS"],
    year: "2023",
    status: "Live",
    featured: false,
    accentColor: "#ff0055",
    highlights: [
      "Real-time attendance tracking system",
      "Student & teacher management modules",
      "Dynamic analytics dashboards",
      "Approval & workflow management",
      "Responsive and scalable UI design",
    ],
  },

  {
    id: "casino-table-system",
    title: "Casino Table System",
    tagline: "Real-time table monitoring & operations system",
    description:
      "A real-time casino table management system with live updates, staff tracking, and operational dashboards.",
    longDescription:
      "The Casino Table System is a real-time monitoring platform developed using React. It manages live table statuses, staff assignments, and session tracking. The architecture ensures scalability and maintainability through clean component structures and efficient REST API communication.",
    category: "Frontend",
    tags: ["Real-time", "Monitoring", "Operations"],
    techStack: ["React", "JavaScript", "REST API"],
    year: "2025",
    status: "Live",
    featured: false,
    accentColor: "#00f0ff",
    highlights: [
      "Live table status updates",
      "Session monitoring & tracking",
      "Staff management module",
      "Scalable component-based architecture",
      "Real-time data synchronization",
    ],
  },
];

/* ── Helper Functions ── */

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
