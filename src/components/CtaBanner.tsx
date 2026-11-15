"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] bg-brand-lime p-8 sm:p-12 lg:p-16 border border-lime-400 shadow-limeGlow"
        >
          {/* Subtle Graphic background contours */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#121212_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-dark tracking-tight leading-[1.05]">
                Let's build<br />
                something great.
              </h2>
            </div>

            {/* Center Explainer */}
            <div className="lg:col-span-4">
              <p className="text-base sm:text-lg text-brand-dark/85 font-medium leading-relaxed">
                Have a project in mind or an opportunity to collaborate? I'd love to hear from you.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-3 flex lg:justify-end">
              <a
                href="mailto:shyamprasad2000.sp@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-dark text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-neutral-800 hover:shadow-xl active:scale-95 group"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
