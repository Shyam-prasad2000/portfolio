export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  icon: string;
  highlight?: boolean;
}

export const techStackData: TechItem[] = [
  { name: "Angular", category: "frontend", icon: "/assets/icons/angular.svg", highlight: true },
  { name: "Next.js", category: "frontend", icon: "/assets/icons/nextjs.svg", highlight: true },
  { name: "Node.js", category: "backend", icon: "/assets/icons/nodejs.svg", highlight: true },
  { name: "NestJS", category: "backend", icon: "/assets/icons/nestjs.svg", highlight: true },
  { name: "TypeScript", category: "frontend", icon: "/assets/icons/typescript.svg", highlight: true },
  { name: "PostgreSQL", category: "database", icon: "/assets/icons/postgresql.svg", highlight: true },
  { name: "MongoDB", category: "database", icon: "/assets/icons/mongodb.svg", highlight: true },
  { name: "RxJS", category: "frontend", icon: "/assets/icons/rxjs.svg", highlight: false },
  { name: "Express.js", category: "backend", icon: "/assets/icons/express.svg", highlight: false },
  { name: "MS SQL Server", category: "database", icon: "/assets/icons/mssql.svg", highlight: false },
  { name: "MySQL", category: "database", icon: "/assets/icons/mysql.svg", highlight: false },
  { name: "Bootstrap", category: "frontend", icon: "/assets/icons/bootstrap.svg", highlight: false },
  { name: "Angular Material", category: "frontend", icon: "/assets/icons/material.svg", highlight: false },
  { name: "Git", category: "tools", icon: "/assets/icons/git.svg", highlight: false },
  { name: "Postman", category: "tools", icon: "/assets/icons/postman.svg", highlight: false },
];
