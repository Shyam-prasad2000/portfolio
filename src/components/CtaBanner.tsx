"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MessageSquare } from "lucide-react";

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
            <div className="lg:col-span-4 flex flex-col gap-3">
              <p className="text-base sm:text-lg text-brand-dark/90 font-medium leading-relaxed">
                Have a project in mind or an opportunity to collaborate? I'd love to hear from you.
              </p>
              <div className="flex flex-col gap-1.5 text-xs font-bold text-brand-dark">
                <a
                  href="tel:+918078159348"
                  className="inline-flex items-center gap-2 hover:underline w-fit"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+91 8078159348</span>
                </a>
                <a
                  href="mailto:shyamprasad2000.sp@gmail.com"
                  className="inline-flex items-center gap-2 hover:underline w-fit"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>shyamprasad2000.sp@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-center">
              <a
                href="tel:+918078159348"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-dark text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-neutral-800 hover:shadow-xl active:scale-95 group w-full sm:w-auto lg:w-full"
              >
                <Phone className="w-4 h-4 text-brand-lime" />
                <span>Call +91 8078159348</span>
              </a>
              <a
                href="mailto:shyamprasad2000.sp@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/90 text-brand-dark font-bold text-sm tracking-wide transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95 group w-full sm:w-auto lg:w-full border border-neutral-300"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
