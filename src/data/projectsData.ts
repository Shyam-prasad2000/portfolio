export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: "Full-Stack" | "Enterprise Frontend" | "ERP & Systems";
  image: string;
  tags: string[];
  role: string;
  timeline: string;
  company: string;
  overview: string;
  keyHighlights: string[];
  technicalDetails: string[];
  metrics: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "p2p",
    title: "P2P Procurement Platform",
    shortTitle: "P2P Procurement",
    tagline: "End-to-end procurement solution for PR, PO, RFQ, evaluations, and vendor approvals.",
    category: "Full-Stack",
    image: "/assets/images/project-p2p.svg",
    tags: ["Angular", "NestJS", "PostgreSQL", "Node.js", "RxJS"],
    role: "Full-Stack Software Engineer",
    timeline: "2025 – Present",
    company: "Seeroo IT Solutions",
    overview:
      "Enterprise procure-to-pay (P2P) platform designed to eliminate procurement bottlenecks across distributed organizations. Digitizes the full procurement lifecycle from initial Purchase Requisitions (PR) and Requests for Quotation (RFQ) through vendor bidding, commercial and technical evaluations, and Purchase Order (PO) dispatch.",
    keyHighlights: [
      "Built dynamic Reactive Forms with FormArray trees for complex line-item procurement tables.",
      "Engineered multi-stage evaluation scoring systems for vendor technical and commercial audits.",
      "Developed full-stack REST API microservices using NestJS, Node.js, and PostgreSQL.",
      "Implemented strict JWT authentication, role-based access control (RBAC), and approval matrices.",
    ],
    technicalDetails: [
      "Angular 18 Reactive Architecture with signals and custom RxJS operators.",
      "PostgreSQL normalized relational schema with ACID-compliant transaction safety.",
      "Optimized payload streaming with pagination, virtual scrolling, and server-side filtering.",
    ],
    metrics: [
      { label: "Cycle Time Reduction", value: "45%" },
      { label: "Audit Accuracy", value: "99.8%" },
      { label: "Vendor Response Rate", value: "3x Faster" },
    ],
  },
  {
    id: "aurex",
    title: "Aurex – Enterprise Auditing Software",
    shortTitle: "Aurex Auditing",
    tagline: "Comprehensive audit and risk management platform to plan, execute, and track compliance.",
    category: "Enterprise Frontend",
    image: "/assets/images/project-aurex.svg",
    tags: ["Angular", "TypeScript", "RxJS", "Angular Material"],
    role: "Software Engineer",
    timeline: "Nov 2024 – Mar 2025",
    company: "Beinex Consulting",
    overview:
      "Aurex is an enterprise-grade Governance, Risk, and Compliance (GRC) audit management platform. It equips corporate internal and external auditors with standardized workpapers, risk heatmaps, evidence tracking, and automated finding remediations.",
    keyHighlights: [
      "Developed high-performance reusable Angular UI components following strict design-system guidelines.",
      "Implemented dynamic risk evaluation checklists with conditional business rules and nested validations.",
      "Created real-time audit finding trackers, timeline milestones, and status indicators.",
      "Optimized client-side rendering performance and lazy-loaded module bundles.",
    ],
    technicalDetails: [
      "State management using RxJS BehaviorSubjects and declarative streams.",
      "Angular Material theming with custom accessible controls and high-contrast tables.",
      "Type-safe API response contracts and strict TypeScript compile checks.",
    ],
    metrics: [
      { label: "Audit Workpapers", value: "5,000+" },
      { label: "Time Savings", value: "35%" },
      { label: "UI Response Speed", value: "<120ms" },
    ],
  },
  {
    id: "lulu-hrms",
    title: "Lulu Icon (HRMS & Workflow Platform)",
    shortTitle: "Lulu Icon HRMS",
    tagline: "Comprehensive HR management system handling employee records, leaves, and approvals.",
    category: "Full-Stack",
    image: "/assets/images/project-lulu.svg",
    tags: ["Angular", "Node.js", "MSSQL", "Express.js", "Sequelize"],
    role: "Junior Software Developer",
    timeline: "2022 – 2024",
    company: "Mantles Solution",
    overview:
      "Large-scale enterprise Human Resource Management System (HRMS) handling employee lifecycle management, attendance synchronization, complex leave deduction engines, multi-tier hierarchical approvals, and corporate document management.",
    keyHighlights: [
      "Built multi-step onboarding and employee profile management wizards with photo and document uploads.",
      "Engineered automated approval hierarchies with email notifications and audit logs.",
      "Designed RESTful endpoints using Node.js, Express.js, and Sequelize ORM on MS SQL Server.",
      "Integrated PDF generation engines (PDFKit, jsPDF) for payslips, employment certificates, and tax statements.",
    ],
    technicalDetails: [
      "Relational queries, stored procedures, and transactions with MSSQL.",
      "Role-based routing guards, interceptors for automatic token refresh, and error boundaries.",
      "Excel batch import parsers for monthly attendance logs and employee master data.",
    ],
    metrics: [
      { label: "Active Employees", value: "10,000+" },
      { label: "Requests Processed", value: "250K+" },
      { label: "Uptime Reliability", value: "99.9%" },
    ],
  },
  {
    id: "cafm",
    title: "CAFM Multi-Tenant Facility Management",
    shortTitle: "CAFM Facility",
    tagline: "Multi-tenant cloud platform for commercial real estate facilities, service requests, and maintenance.",
    category: "Enterprise Frontend",
    image: "/assets/images/project-cafm.svg",
    tags: ["Angular", "RxJS", "TypeScript", "REST APIs"],
    role: "Software Engineer",
    timeline: "2025",
    company: "Seeroo IT Solutions",
    overview:
      "Computer-Aided Facility Management (CAFM) system architected for commercial property managers, building engineers, and corporate tenants to coordinate maintenance schedules, track work orders, and manage facility assets.",
    keyHighlights: [
      "Architected multi-tenant user interfaces with role-specific views for tenants, engineers, and supervisors.",
      "Engineered interactive service ticket boards with SLA countdown timers and priority categorization.",
      "Integrated REST APIs with proactive error handling and offline optimistic UI updates.",
    ],
    technicalDetails: [
      "Modular Angular standalone components with clean dependency injection.",
      "Dynamic filtering for assets, maintenance intervals, and technician assignments.",
      "Comprehensive telemetry tracking and responsive layouts across tablet and desktop viewports.",
    ],
    metrics: [
      { label: "Ticket Resolution Rate", value: "+30%" },
      { label: "Multi-Tenant Entities", value: "15+" },
      { label: "SLA Breaches", value: "<1%" },
    ],
  },
  {
    id: "alshareef",
    title: "AlShareef CRM & Employee Module",
    shortTitle: "AlShareef Module",
    tagline: "Extended enterprise CRM with employee operations, client relations, and data tracking.",
    category: "ERP & Systems",
    image: "/assets/images/project-alshareef.svg",
    tags: ["Angular", "REST APIs", "Bootstrap", "RxJS"],
    role: "Software Engineer",
    timeline: "2025",
    company: "Seeroo IT Solutions",
    overview:
      "Enterprise customer and employee operations module built within the AlShareef CRM ecosystem. Bridges team performance metrics, customer relationship workflows, task delegations, and executive reporting in a unified interface.",
    keyHighlights: [
      "Engineered intuitive employee directory, role assignments, and client portfolio trackers.",
      "Implemented comprehensive search, filtering, and server-side pagination with RxJS debounce operators.",
      "Collaborated closely with backend teams to define type-safe REST contracts and payload standards.",
    ],
    technicalDetails: [
      "Custom responsive Bootstrap components tailored to corporate typography and accessibility.",
      "Client-side caching layer for frequently accessed CRM reference datasets.",
    ],
    metrics: [
      { label: "Client Records Managed", value: "50,000+" },
      { label: "User Adoption Rate", value: "96%" },
      { label: "Data Retrieval Time", value: "<150ms" },
    ],
  },
  {
    id: "lulubiz",
    title: "Lulu Business Suite (MarketConnect & Leasing)",
    shortTitle: "Lulu Business Suite",
    tagline: "Integrated retail ecosystem spanning vendor marketplace, commercial leasing, and maintenance.",
    category: "ERP & Systems",
    image: "/assets/images/project-lulubiz.svg",
    tags: ["Angular", "Node.js", "Sequelize", "MongoDB", "MySQL"],
    role: "Junior Software Developer",
    timeline: "2022 – 2024",
    company: "Mantles Solution",
    overview:
      "Enterprise commercial real estate and retail suite powering Lulu's mall leasing contracts, tenant onboarding, store maintenance requests, and MarketConnect vendor collaboration.",
    keyHighlights: [
      "Constructed interactive leasing contract workflows with milestone tracking and payment schedules.",
      "Created vendor marketplace catalog management interfaces with bulk product update tools.",
      "Integrated hybrid backend architecture utilizing MySQL, MSSQL, and MongoDB for diverse data structures.",
    ],
    technicalDetails: [
      "Sequelize ORM models and relationships with comprehensive indexing.",
      "SOAP and REST external payment gateway and enterprise service integrations.",
    ],
    metrics: [
      { label: "Retail Tenants", value: "1,200+" },
      { label: "Commercial Leases", value: "3,500+" },
      { label: "Contract Turnover", value: "2x Faster" },
    ],
  },
];
