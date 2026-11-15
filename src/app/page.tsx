"use client";

import { useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ResumeDrawer from "@/components/ResumeDrawer";
import BackToTop from "@/components/BackToTop";
import { ProjectItem } from "@/data/projectsData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-canvas text-brand-dark flex flex-col">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Page Sections */}
      <Hero />
      <About />
      <TechStack />
      <Projects onSelectProject={(p) => setSelectedProject(p)} />
      <Experience />
      <CtaBanner />
      <Footer />

      {/* Interactive Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ResumeDrawer
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
      <BackToTop />
    </main>
  );
}
