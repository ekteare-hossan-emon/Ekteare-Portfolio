import React, { useEffect } from 'react';
import { ProjectItem } from '../../types/portfolio';
import { X, ExternalLink, Github, Shield, Terminal, Cpu, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-[#F5F5F5] space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Close button */}
        <div className="flex items-start justify-between gap-4 border-b border-[#2A2A2A] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">• Case Study</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-[#171717] hover:bg-[#2A2A2A] rounded-xl transition-colors border border-[#2A2A2A]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Hero Banner Image */}
        <div className="relative rounded-xl overflow-hidden border border-[#2A2A2A] aspect-video bg-[#171717]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171717] hover:bg-[#1E1E1E] text-white border border-[#2A2A2A] hover:border-cyan-500/50 rounded-xl text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View Source Repository</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-500 text-black hover:bg-cyan-400 font-semibold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>

        {/* Summary & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#171717] p-6 rounded-xl border border-[#2A2A2A]">
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">Project Overview</h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {caseStudy?.overview || project.description}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">Tech Stack & Tools</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-mono bg-[#1E1E1E] text-cyan-300 rounded border border-[#2A2A2A]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Case Study Sections if available */}
        {caseStudy && (
          <div className="space-y-8 divide-y divide-[#2A2A2A]">
            {/* Problem & Objectives */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-heading font-medium">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-heading font-medium">
                  <Shield className="w-4 h-4" />
                  <span>Key Objectives</span>
                </div>
                <ul className="space-y-2">
                  {caseStudy.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture & Role */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-heading font-medium">
                <Layers className="w-4 h-4" />
                <span>Architecture & System Design</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {caseStudy.architecture}
              </p>
              <div className="text-xs font-mono text-zinc-400">
                My Role: <span className="text-white font-sans">{caseStudy.myRole}</span>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Technical Challenges</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {caseStudy.challenges.map((c, i) => (
                    <li key={i} className="bg-[#171717] p-3 rounded-lg border border-[#2A2A2A]">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Engineering Solutions</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {caseStudy.solutions.map((s, i) => (
                    <li key={i} className="bg-[#171717] p-3 rounded-lg border border-cyan-500/20 text-cyan-200">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results & Lessons */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Measurable Results</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {caseStudy.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 mt-2" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Lessons & Takeaways</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {caseStudy.lessonsLearned.map((l, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer close */}
        <div className="border-t border-[#2A2A2A] pt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#171717] hover:bg-[#2A2A2A] text-white border border-[#2A2A2A] rounded-xl text-sm font-medium transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
