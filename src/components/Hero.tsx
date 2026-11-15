"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-brand-lime rounded-sm" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-800">
                SOFTWARE ENGINEER
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-[84px] font-extrabold tracking-[-0.04em] leading-[0.95] text-brand-dark mb-6 font-heading">
              Shyam<br />
              Prasad
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-md mb-8">
              Full-stack developer building scalable, reliable and user-focused web applications
              that solve real business problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-lime text-brand-dark font-bold text-sm tracking-tight transition-all duration-200 hover:bg-brand-limeHover hover:shadow-limeGlow active:scale-95 group"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-neutral-300 bg-white/60 text-brand-dark font-semibold text-sm transition-all duration-200 hover:bg-white hover:border-neutral-400 active:scale-95 shadow-sm"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/shyamprasad-cv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-neutral-300 bg-white/80 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-200 shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/shyamprasad-c-v-3b23521a1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-neutral-300 bg-white/80 flex items-center justify-center text-brand-dark hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-200 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:shyamprasad2000.sp@gmail.com"
                aria-label="Send Email"
                className="w-10 h-10 rounded-full border border-neutral-300 bg-white/80 flex items-center justify-center text-brand-dark hover:bg-brand-lime hover:text-brand-dark hover:border-brand-lime transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Center Column: Portrait Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
              <Image
                src="/assets/images/hero-portrait.png"
                alt="Shyam Prasad - Angular & Full-Stack Developer"
                width={420}
                height={520}
                priority
                className="object-contain w-full h-auto drop-shadow-md select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Right Column: Key Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {/* Stat 1: Experience */}
            <div className="bg-white border border-brand-cardBorder rounded-2xl p-6 shadow-card hover:shadow-cardHover transition-all duration-300">
              <div className="text-3xl font-heading font-extrabold text-brand-dark tracking-tight mb-1">
                4+ Years
              </div>
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                Professional Experience
              </div>
            </div>

            {/* Stat 2: Projects */}
            <div className="bg-white border border-brand-cardBorder rounded-2xl p-6 shadow-card hover:shadow-cardHover transition-all duration-300">
              <div className="text-3xl font-heading font-extrabold text-brand-dark tracking-tight mb-1">
                8+
              </div>
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                Enterprise Projects
              </div>
            </div>

            {/* Stat 3: Tech Focus */}
            <div className="bg-white border border-brand-cardBorder rounded-2xl p-6 shadow-card hover:shadow-cardHover transition-all duration-300">
              <div className="text-3xl font-heading font-extrabold text-brand-dark tracking-tight mb-1">
                Full-Stack
              </div>
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                Angular · Node.js · NestJS
              </div>
            </div>

            {/* Availability Pill */}
            <div className="bg-white border border-brand-cardBorder rounded-2xl p-4 flex items-center gap-3 shadow-card">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-lime"></span>
              </span>
              <span className="text-xs font-bold text-neutral-800">
                Available for opportunities
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
