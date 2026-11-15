"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projectsData";

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 border-t border-brand-border bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-12 border-b border-brand-border mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-dark uppercase">
            03 / PROJECTS
          </span>
          <a
            href="#projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:underline"
          >
            <span>All Enterprise Works</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-dark tracking-tight mb-3">
            Selected Works
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-lg">
            A look at some of the enterprise products and production workflows I've engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => onSelectProject(project)}
              className="group bg-white border border-brand-cardBorder rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover hover:border-neutral-300 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-brand-cardBorder">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Action Badge */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="px-4 py-2 rounded-full bg-brand-lime text-brand-dark text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Explore Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-heading font-bold text-brand-dark group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-brand-dark shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed mb-6">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-[11px] font-semibold text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-neutral-100 text-[11px] font-semibold text-neutral-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
