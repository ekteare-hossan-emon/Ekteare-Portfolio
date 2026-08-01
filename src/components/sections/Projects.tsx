import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ProjectItem } from '../../types/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Github, ExternalLink, ArrowRight, Shield, Network, FileCode, Layers } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Programming', 'Algorithms', 'Digital Logic', 'Web Development'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="04 / PROJECTS"
          title="SELECTED ACADEMIC WORK & PRACTICAL LEARNING"
          subtitle="Exploring programming, algorithms, digital logic, and web development through academic coursework and practical learning. I am also gradually building the technical foundation required for future studies in cybersecurity and computer networking."
        />

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#1F1F1F] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#171717] text-zinc-400 hover:text-white border border-[#2A2A2A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#121212] rounded-2xl border border-[#2A2A2A] hover:border-cyan-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Image Preview Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                {/* Category & Badge Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-[#080808]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 rounded-md">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 rounded-md">
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-1 bg-[#171717] p-3 rounded-xl border border-[#222222]">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-semibold block">Key Learning & Contributions</span>
                    <p className="text-xs text-zinc-300 leading-normal">
                      {project.keyContribution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono bg-[#1A1A1A] text-cyan-300 border border-[#2A2A2A] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between border-t border-[#222222] pt-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-zinc-400 hover:text-white bg-[#181818] rounded-lg border border-[#2A2A2A] transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-zinc-400 hover:text-cyan-400 bg-[#181818] rounded-lg border border-[#2A2A2A] transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
