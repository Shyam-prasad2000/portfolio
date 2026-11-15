export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface CertificationItem {
  title: string;
  grade: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "seeroo",
    company: "Seeroo IT Solutions",
    role: "Software Engineer",
    period: "Mar 2025 – Present",
    location: "Kochi, India",
    isCurrent: true,
    description:
      "Develop enterprise web applications primarily using Angular, TypeScript, JavaScript, HTML, CSS, RxJS, Angular Material, and Bootstrap. Work across P2P Procurement, AlShareef Employee Module, RECO Support, and initial CAFM modules with a primary focus on frontend development and full-stack API integration.",
    highlights: [
      "Deliver P2P procurement features covering Purchase Requisitions, RFQs, vendor quotations, Purchase Orders, supplier management, approvals, technical/commercial evaluations, and supplier portals.",
      "Build complex Reactive Forms, dynamic FormArrays, reusable components, tables, validations, calculations, file uploads, and role-based workflows.",
      "Contribute to frontend and backend development in P2P using Angular, Node.js, Next.js, and PostgreSQL; develop REST APIs and implement backend business logic and database operations.",
      "Work on authentication, authorization, JWT handling, API integration, error handling, application-level services, and production troubleshooting.",
      "Collaborate with cross-functional teams through requirement analysis, development, testing, debugging, deployment, and production support.",
    ],
  },
  {
    id: "beinex",
    company: "Beinex Consulting",
    role: "Software Engineer",
    period: "Nov 2024 – Mar 2025",
    location: "Kochi, India",
    description:
      "Contributed to Aurex, an enterprise auditing application for risk analysis and management. Built reusable, responsive Angular components, implemented dynamic form controls, validations, and business rules, and collaborated with cross-functional teams to support application performance and maintainable frontend development.",
    highlights: [
      "Engineered standardized audit workpaper components with strict accessibility and performance.",
      "Implemented dynamic risk evaluation checklists and conditional form workflows with RxJS streams.",
      "Coordinated with QA and product teams to optimize client-side bundle sizes and rendering cycles.",
    ],
  },
  {
    id: "mantles",
    company: "Mantles Solution",
    role: "Junior Software Developer",
    period: "Apr 2022 – Nov 2024",
    location: "Kochi, India",
    description:
      "Developed and maintained critical enterprise applications including Lulu Icon (HRMS), Lulu CRM, Lulu MarketConnect, Lulu Maintenance, and Lulu Leasing.",
    highlights: [
      "Built responsive Angular interfaces, reusable components, dashboards, tables, modals, forms, and business workflows using Angular, TypeScript, Bootstrap, and Angular Material.",
      "Implemented Reactive Forms and complex validations, including dynamic fields, conditional rules, calculations, and multi-step workflows.",
      "Integrated Angular applications with REST APIs and backend services using Node.js and Express.js; implemented database operations and API functionality with Sequelize.",
      "Worked with MSSQL, MySQL, and MongoDB, including database queries, associations, transactions, and data processing.",
      "Implemented authentication, authorization, role-based access, approval workflows, master data management, reporting, and business validations.",
      "Integrated SOAP and third-party APIs; supported PDF/report generation (PDFKit, jsPDF, SSRS), file uploads, document processing, Excel imports, and performance-related fixes.",
    ],
  },
  {
    id: "lumina",
    company: "Lumina Technolab",
    role: "MEAN Stack Intern",
    period: "Oct 2021 – Apr 2022",
    location: "Kochi, India",
    description:
      "Gained intensive hands-on experience in full-stack web development with Angular, Node.js, Express.js, and MongoDB; built CRUD APIs and responsive user interfaces.",
    highlights: [
      "Built full-stack prototype applications with Angular frontends and Express/MongoDB backends.",
      "Assisted with API testing, database schema designs, and debugging production-like environments.",
    ],
  },
];

export const educationData: EducationItem = {
  degree: "BSc Computer Science",
  institution: "University of Calicut",
  year: "Graduated in 2021",
};

export const certificationsData: CertificationItem[] = [
  {
    title: "NACTET Certificate in MEA(R)N Stack Web Development",
    grade: "Grade: A+ Distinction",
  },
  {
    title: "Shape AI Certification in JavaScript and React.js",
    grade: "Comprehensive Frontend Engineering",
  },
];
