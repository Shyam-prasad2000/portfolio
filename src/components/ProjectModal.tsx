"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Cpu, BarChart3, Briefcase } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-modal overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col border border-neutral-200"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-canvas/40 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-500">
                  {project.category}
                </span>
                <span className="text-neutral-300">·</span>
                <span className="text-[11px] font-bold text-neutral-600">
                  {project.company}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-brand-dark">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-brand-dark transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Project Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-canvas border border-brand-border flex flex-col items-center justify-center text-center"
                >
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-brand-dark mb-0.5">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-semibold text-brand-muted">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-lime" />
                <span>Executive Overview</span>
              </h4>
              <p className="text-sm sm:text-base text-brand-dark/90 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {project.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Details */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-lime" />
                <span>Technologies & Architecture</span>
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-neutral-100 text-xs font-semibold text-brand-dark border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 pl-4 border-l-2 border-neutral-200">
                {project.technicalDetails.map((detail, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-neutral-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
