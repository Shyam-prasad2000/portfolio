"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-border bg-canvas py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-12 border-b border-brand-border">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <a href="#home" className="flex items-center gap-0.5 text-2xl font-heading font-extrabold text-brand-dark">
              <span>SP</span>
              <span className="text-brand-lime">/</span>
            </a>
            <p className="text-xs sm:text-sm text-brand-muted">
              Angular & Full-Stack Developer · Kochi, India
            </p>
          </div>

          {/* Socials & Top Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shyamprasad-cv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/shyamprasad-c-v-3b23521a1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-brand-dark hover:bg-[#0077B5] hover:text-white transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:shyamprasad2000.sp@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-brand-dark hover:bg-brand-lime hover:text-brand-dark transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-neutral-800 transition-all shadow-sm ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-brand-muted gap-4">
          <div>
            &copy; {new Date().getFullYear()} Shyamprasad C V. All rights reserved.
          </div>
          <div>
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
}
