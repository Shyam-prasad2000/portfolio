"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { techStackData } from "@/data/techStackData";
import { ArrowRight } from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { label: "All Skills", id: "all" },
    { label: "Frontend", id: "frontend" },
    { label: "Backend", id: "backend" },
    { label: "Databases", id: "database" },
    { label: "Tools", id: "tools" },
  ];

  const filteredTech =
    activeCategory === "all"
      ? techStackData
      : techStackData.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 border-t border-brand-border bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-brand-border mb-12 gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-brand-dark uppercase">
              02 / TECH STACK
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-brand-dark text-white shadow-sm"
                    : "bg-white text-brand-muted border border-brand-cardBorder hover:text-brand-dark hover:border-neutral-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4"
        >
          <AnimatePresence>
            {filteredTech.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={item.name}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center p-5 rounded-xl bg-white border border-brand-cardBorder shadow-card hover:shadow-cardHover hover:border-neutral-300 transition-all duration-200 group text-center cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110">
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-brand-dark tracking-tight">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
