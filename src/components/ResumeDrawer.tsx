"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, Phone, Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import { experienceData, educationData, certificationsData } from "@/data/experienceData";

interface ResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDrawer({ isOpen, onClose }: ResumeDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm"
        />

        {/* Slide-over Drawer */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 260 }}
          className="relative w-full max-w-2xl bg-white shadow-2xl z-10 h-full flex flex-col border-l border-neutral-200"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-canvas">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                CURRICULUM VITAE
              </span>
              <h3 className="text-xl font-heading font-extrabold text-brand-dark">
                Shyamprasad C V
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:shyamprasad2000.sp@gmail.com?subject=Portfolio%20Inquiry%20-%20Resume%20Request"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-lime text-brand-dark text-xs font-bold shadow-sm hover:bg-brand-limeHover transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Contact for PDF</span>
              </a>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-brand-dark transition-colors"
                aria-label="Close resume drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-brand-dark">
            {/* Contact Details */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-600 pb-6 border-b border-neutral-100">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                shyamprasad2000.sp@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                +91 8078159348
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-neutral-400" />
                linkedin.com/in/shyamprasad-c-v-3b23521a1
              </span>
            </div>

            {/* Professional Summary */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-3">
                PROFESSIONAL SUMMARY
              </h4>
              <p className="text-sm leading-relaxed text-neutral-700">
                Angular Developer with 4+ years of experience building scalable, responsive
                enterprise web applications. Strong hands-on experience with Angular, TypeScript,
                JavaScript, RxJS, Angular Material, reusable components, Reactive Forms, complex
                validations, and REST API integration. Also experienced in backend development using
                Node.js, Express.js, NestJS, and Next.js, with database experience in PostgreSQL, MS
                SQL Server, MySQL, and MongoDB.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-3">
                TECHNICAL SKILLS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-canvas rounded-lg border border-brand-border">
                  <div className="font-bold text-brand-dark mb-1">Frontend</div>
                  <div className="text-neutral-600">
                    Angular, TypeScript, JavaScript, HTML5, CSS3, RxJS, Angular Material, Bootstrap
                  </div>
                </div>
                <div className="p-3 bg-canvas rounded-lg border border-brand-border">
                  <div className="font-bold text-brand-dark mb-1">Backend</div>
                  <div className="text-neutral-600">Node.js, Express.js, NestJS, Next.js</div>
                </div>
                <div className="p-3 bg-canvas rounded-lg border border-brand-border">
                  <div className="font-bold text-brand-dark mb-1">Databases</div>
                  <div className="text-neutral-600">PostgreSQL, MS SQL Server (MSSQL), MySQL, MongoDB</div>
                </div>
                <div className="p-3 bg-canvas rounded-lg border border-brand-border">
                  <div className="font-bold text-brand-dark mb-1">Libraries & Reporting</div>
                  <div className="text-neutral-600">Sequelize, PrimeNG, Puppeteer, PDFKit, jsPDF, SSRS</div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-4">
                PROFESSIONAL EXPERIENCE
              </h4>
              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-neutral-200 pl-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h5 className="text-sm font-bold text-brand-dark">{exp.company}</h5>
                      <span className="text-xs font-semibold text-neutral-500">{exp.period}</span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-700">{exp.role}</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{exp.description}</p>
                    {exp.highlights.length > 0 && (
                      <ul className="space-y-1 pt-1">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="text-[11px] text-neutral-500 leading-normal flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-2">
                  EDUCATION
                </h4>
                <div className="text-xs font-bold text-brand-dark">{educationData.degree}</div>
                <div className="text-xs text-neutral-600">{educationData.institution}</div>
                <div className="text-[11px] text-neutral-400">{educationData.year}</div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-2">
                  CERTIFICATIONS
                </h4>
                {certificationsData.map((c) => (
                  <div key={c.title} className="mb-2 text-xs">
                    <div className="font-bold text-brand-dark">{c.title}</div>
                    <div className="text-[11px] text-neutral-500">{c.grade}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
