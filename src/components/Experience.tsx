"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Award, MapPin } from "lucide-react";
import { experienceData, educationData, certificationsData } from "@/data/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-brand-border bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-12 border-b border-brand-border mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-dark uppercase">
            04 / EXPERIENCE
          </span>
          <ArrowUpRight className="w-4 h-4 text-brand-dark" />
        </div>

        {/* 2-Column Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-dark tracking-tight leading-[1.05] mb-4">
              My Professional<br />
              Journey
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              4+ years of progressive experience delivering enterprise-grade web applications,
              specializing in Angular frontends and robust full-stack solutions.
            </p>
          </div>

          {/* Right Column: Timeline List */}
          <div className="lg:col-span-8 flex flex-col">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 relative group pb-12 last:pb-0"
              >
                {/* Timeline Marker (Dot + Line) */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-transform duration-300 mt-1.5 ${
                      item.isCurrent
                        ? "bg-brand-lime border-brand-dark ring-4 ring-lime-200"
                        : "bg-white border-neutral-400 group-hover:border-brand-dark"
                    }`}
                  />
                  {index !== experienceData.length - 1 && (
                    <div className="w-[1.5px] bg-neutral-300 flex-1 my-2" />
                  )}
                </div>

                {/* Content Box */}
                <div className="flex-1 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-brand-dark">
                        {item.company}
                      </h3>
                      <div className="text-sm font-semibold text-neutral-600">
                        {item.role}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          item.isCurrent
                            ? "bg-brand-dark text-brand-lime"
                            : "bg-neutral-200 text-neutral-800"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-brand-dark/90 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.highlights.length > 0 && (
                    <ul className="space-y-2 pl-4 border-l-2 border-neutral-200">
                      {item.highlights.map((bullet, i) => (
                        <li key={i} className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-brand-border">
          {/* Education Card */}
          <div className="bg-white border border-brand-cardBorder rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-brand-dark">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
                  EDUCATION
                </span>
              </div>

              <h4 className="text-xl font-heading font-bold text-brand-dark mb-1">
                {educationData.degree}
              </h4>
              <p className="text-sm font-medium text-brand-muted mb-4">
                {educationData.institution}
              </p>
            </div>

            <div className="text-xs font-bold text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-md inline-block w-fit">
              {educationData.year}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white border border-brand-cardBorder rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-brand-dark">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
                  CERTIFICATIONS
                </span>
              </div>

              <div className="space-y-4">
                {certificationsData.map((cert) => (
                  <div key={cert.title} className="pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                    <h5 className="text-sm font-bold text-brand-dark mb-0.5">
                      {cert.title}
                    </h5>
                    <span className="text-xs font-semibold text-neutral-500">
                      {cert.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
