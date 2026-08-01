import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Leadership } from './components/sections/Leadership';
import { Credentials } from './components/sections/Credentials';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

import { ProjectModal } from './components/ui/ProjectModal';
import { CvModal } from './components/ui/CvModal';
import { CyberTerminal } from './components/ui/CyberTerminal';
import { Toast } from './components/ui/Toast';

import { ProjectItem } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastVisible, setToastVisible] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Navigation */}
      <Navbar
        onOpenCv={() => setCvModalOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenCv={() => setCvModalOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* 01 / About Section */}
        <About
          onOpenCv={() => setCvModalOpen(true)}
          onToast={triggerToast}
        />

        {/* 02 / Expertise & Skills Section */}
        <Expertise />

        {/* 03 / Experience Timeline Section */}
        <Experience />

        {/* 04 / Selected Projects Grid */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 05 / Leadership & Forum Roles */}
        <Leadership />

        {/* 06 / Credentials & Certifications */}
        <Credentials />

        {/* 07 / Education Foundation */}
        <Education />

        {/* 08 / Contact Section */}
        <Contact
          onOpenCv={() => setCvModalOpen(true)}
          onToast={triggerToast}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Modals & Overlay Drawers */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />

      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        onToast={triggerToast}
      />

      <CyberTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenCv={() => setCvModalOpen(true)}
        onToast={triggerToast}
      />

      {/* Global Toast Notifications */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
