export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "DevOps";
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 95,
    category: "Frontend",
    description:
      "Building complex SPAs with Hooks, Context API, and state management.",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 90,
    category: "Frontend",
    description:
      "SSR, SSG, and App Router for high-performance React applications.",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 88,
    category: "Frontend",
    description:
      "Developing type-safe applications for better maintainability and scalability.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    level: 92,
    category: "Frontend",
    description:
      "Utility-first CSS framework for rapid and responsive UI development.",
  },

  // Backend
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    level: 94,
    category: "Backend",
    description:
      "Robust PHP framework for building scalable enterprise applications.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 85,
    category: "Backend",
    description:
      "Building efficient backend services and RESTful APIs with Express.",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 82,
    category: "Backend",
    description: "Minimalist web framework for Node.js backends.",
  },
  //   {
  //     name: ".NET",
  //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  //     level: 75,
  //     category: "Backend",
  //     description:
  //       "Developing robust enterprise solutions using C# and .NET Core.",
  //   },

  // Database
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 90,
    category: "Database",
    description:
      "Designing and optimizing relational schemas and complex queries.",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: 85,
    category: "Database",
    description: "Advanced relational database management with JSONB support.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 80,
    category: "Database",
    description:
      "Working with NoSQL document stores for flexible data modeling.",
  },
  {
    name: "SQL Server",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    level: 82,
    category: "Database",
    description: "Enterprise database management and administration with SSMS.",
  },

  // Tools & Others
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 88,
    category: "Tools",
    description:
      "Version control and collaborative development with Git/GitHub.",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    level: 85,
    category: "Tools",
    description:
      "API development, testing, and debugging using Postman for RESTful services.",
  },
  //   {
  //     name: "Docker",
  //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  //     level: 70,
  //     category: "Tools",
  //     description:
  //       "Containerizing applications for consistent deployment environments.",
  //   },
  //   {
  //     name: "Figma",
  //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  //     level: 78,
  //     category: "Tools",
  //     description: "Designing modern UI/UX prototypes and wireframes.",
  //   },
];
