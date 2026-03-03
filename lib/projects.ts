export interface MediaItem {
  type: "image" | "video";
  url: string;
  caption?: string;
  thumbnail?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  techStack: string[];
  year: string;
  status: "Live" | "In Progress" | "Archived";
  featured: boolean;
  accentColor: string;
  liveUrl?: string;
  highlights: string[];
  media?: MediaItem[];
}

export const projects: Project[] = [
  {
    id: "samudra-distribution",
    title: "Samudra Distribution System",
    tagline: "Enterprise distribution & inventory management platform",
    description:
      "A scalable full-stack distribution system with real-time inventory tracking, order lifecycle workflows, and role-based dashboards.",
    longDescription:
      "A full-stack distribution and order management system developed using React, Laravel, and MySQL. The platform streamlines end-to-end distribution workflows including order creation, approvals, branch assignment, payment tracking, and delivery status management. It features role-based access, real-time order tracking, document uploads, and an intuitive dashboard to improve operational efficiency and visibility across the distribution process.",
    category: "Full-Stack",
    techStack: ["React", "Laravel", "MySQL", "REST API", "Tailwind CSS"],
    year: "2025-2026",
    status: "Live",
    featured: true,
    accentColor: "#00f0ff",
    liveUrl: "http://samudradist.onimtaitsl.com/",
    highlights: [
      "Real-time inventory tracking & order workflows",
      "Role-based access control (RBAC)",
      "Optimized RESTful API architecture",
      "Scalable relational database schema",
      "Responsive Tailwind-powered UI",
    ],
    media: [
      {
        type: "image",
        url: "/projects/samudra1.png",
        caption: "Login Interface",
      },
      {
        type: "image",
        url: "/projects/samudra2.png",
        caption: "Order Management Dashboard",
      },
      {
        type: "image",
        url: "/projects/samudra3.jpg",
        caption: "Distribution/order Workflow Interface",
      },
      {
        type: "image",
        url: "/projects/samudra4.png",
        caption: "Role & Permission Management",
      },
      // {
      //   type: "video",
      //   url: "https://www.pexels.com/download/video/6447409/",
      //   caption: "Global Distribution Network Demo",
      //   thumbnail:
      //     "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000",
      // },
    ],
  },

  {
    id: "venpaa-crm",
    title: "Venpaa Book Shop CRM",
    tagline: "Unified CRM, ERP, POS & e-commerce sales management system",
    description:
      "A full-stack CRM and ERP solution built with Next.js and Laravel to manage customers, inventory, sales, POS, e-commerce orders, and financial transactions from a single platform.",
    longDescription:
      "Venpaa Book Shop CRM is a comprehensive business management system designed to handle both online and offline sales operations seamlessly. The platform manages sales originating from the e-commerce website as well as in-store POS transactions, ensuring real-time synchronization of inventory, customers, and financial data.\n\nThe system includes ERP-style workflows such as item requests, purchase orders (PO), goods received notes (GRN), transfer goods notes (TGN), and sales return notes (SRN), etc.. enabling structured inventory and procurement management. It also supports complete financial operations including advance payments, payment vouchers, payment receipts, invoicing, and automated report generation.\n\nBuilt with Next.js, Laravel, and MySQL, the platform features secure role-based access control, optimized backend APIs, and intuitive dashboards for sales, inventory, and finance teams. Venpaa CRM improves operational efficiency, data accuracy, and decision-making while ensuring scalability and secure integration across all business units.",
    category: "Full-Stack",
    techStack: ["Next.js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS"],
    year: "2025-2026",
    status: "Live",
    featured: true,
    accentColor: "#6366f1",
    liveUrl: "https://venpaa.onimtaitsl.com/",
    highlights: [
      "Integrated e-commerce and POS sales management",
      "ERP-style inventory workflows (Item Request, PO, GRN, TGN, SRN)",
      "Customer, product, and supplier lifecycle management",
      "Advance payments, payment vouchers & payment receipts handling",
      "Automated invoicing and financial reporting system",
      "Secure role-based access control",
      "Optimized backend API architecture",
      "Interactive dashboards for sales, inventory, and finance",
      "Enhanced UI/UX with Tailwind CSS",
    ],
    media: [
      {
        type: "image",
        url: "/projects/venpa1.png",
        caption: "Login Interface",
      },
      {
        type: "image",
        url: "/projects/venpa2.png",
        caption: "Transaction Interface",
      },
      {
        type: "image",
        url: "/projects/venpa3.png",
        caption: "Pos sales summary",
      },
      {
        type: "image",
        url: "/projects/venpa4.png",
        caption: "Invoice Form Interface",
      },
      {
        type: "image",
        url: "/projects/venpa5.png",
        caption: "Payment Voucher Interface",
      },
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
    category: "Frontend",
    techStack: ["React", ".NET", "SQL Server", "TypeScript", "Tailwind CSS"],
    year: "2025",
    status: "Live",
    featured: true,
    accentColor: "#10b981",
    liveUrl: "http://oitres.onimtaitsl.com/",
    highlights: [
      "Room booking & availability management",
      "Restaurant billing integration",
      "Automated email receipt functionality",
      "Administrative reporting dashboard",
      "Modular CRUD-based architecture",
    ],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
        caption: "Luxury Room Selection Interface",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1551882547-ff43c6360b3a?auto=format&fit=crop&q=80&w=2000",
        caption: "Guest Check-in Dashboard",
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smart-watch-with-a-blue-interface-34534-large.mp4",
        caption: "Booking Process Walkthrough",
        thumbnail:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000",
      },
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
    techStack: ["React", "Express.js", "MySQL", "Tailwind CSS"],
    year: "2025",
    status: "Live",
    featured: false,
    accentColor: "#fa3778",
    liveUrl: "https://ask.ourschool.lk/",
    highlights: [
      "Real-time attendance tracking system",
      "Student & teacher management modules",
      "Dynamic analytics dashboards",
      "Approval & workflow management",
      "Responsive and scalable UI design",
    ],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
        caption: "Academic Performance Analytics",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1523050335192-ce1690b98a84?auto=format&fit=crop&q=80&w=2000",
        caption: "Student Attendance Portal",
      },
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
    techStack: ["React", "JavaScript", "REST API"],
    year: "2025",
    status: "Archived",
    featured: false,
    accentColor: "#00f0ff",
    highlights: [
      "Live table status updates",
      "Session monitoring & tracking",
      "Staff management module",
      "Scalable component-based architecture",
      "Real-time data synchronization",
    ],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1596838132731-318042531980?auto=format&fit=crop&q=80&w=2000",
        caption: "Live Table Monitoring Interface",
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-binary-digital-interface-30514-large.mp4",
        caption: "Real-time Data Sync Demo",
        thumbnail:
          "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000",
      },
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
