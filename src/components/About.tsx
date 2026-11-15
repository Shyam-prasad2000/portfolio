"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Zap, Users2 } from "lucide-react";

export default function About() {
  const highlights = [
    { title: "Problem Solving", icon: Code2 },
    { title: "Scalable Systems", icon: Layers },
    { title: "Clean & Maintainable Code", icon: Zap },
    { title: "Business Impact", icon: Users2 },
  ];

  return (
    <section id="about" className="py-24 border-t border-brand-border bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-12 border-b border-brand-border mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-dark uppercase">
            01 / ABOUT
          </span>
          <ArrowUpRight className="w-4 h-4 text-brand-dark" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Statement Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-extrabold text-brand-dark tracking-tight leading-[1.05]">
              Building digital<br />
              products with<br />
              <span className="inline-block bg-brand-lime px-2 py-0.5 rounded-md mt-1">
                purpose.
              </span>
            </h2>
          </motion.div>

          {/* Right: Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <p className="text-base sm:text-lg text-brand-dark font-medium leading-relaxed">
              I'm an Angular & Full-Stack Developer with 4+ years of experience building scalable,
              reliable, and user-focused web applications that solve real business problems. I enjoy
              turning complex enterprise workflows and data requirements into maintainable, elegant
              solutions that deliver tangible business value.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              From architecting multi-tenant procurement engines and HRMS approval pipelines to
              integrating robust REST APIs and database transactions with PostgreSQL, Node.js, and
              NestJS, I focus on performance, strict type-safety, and intuitive user experiences.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-brand-border">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-start gap-3 p-4 rounded-xl bg-white border border-brand-cardBorder shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-brand-dark">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-brand-dark leading-snug">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
