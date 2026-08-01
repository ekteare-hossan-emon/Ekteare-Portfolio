import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#080808] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="03 / EXPERIENCE"
          title="EXPERIENCE ACROSS BUSINESS, COMMUNICATION AND TEAMWORK"
          subtitle="Building professional experience through account management, client communication, coordination, and structured problem-solving while continuing my undergraduate studies in Computer Science and Engineering."
        />

        <div className="relative border-l-2 border-[#2A2A2A] ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#111111] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-black" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-[#2A2A2A] hover:border-cyan-500/30 transition-all space-y-6 shadow-xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#222222] pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded">
                        {item.type}
                      </span>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded">
                          Current Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-cyan-400 font-medium text-base mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 bg-[#181818] px-3 py-1.5 rounded-lg border border-[#2A2A2A]">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#181818] px-3 py-1.5 rounded-lg border border-[#2A2A2A]">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.summary}
                </p>

                {/* Outcome Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Core Responsibilities</h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills/Tools Stack */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-2">Skills Applied:</span>
                  {item.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono bg-[#1A1A1A] text-zinc-200 border border-[#2A2A2A] rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Professional Development Callout Card */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#111111] border-2 border-emerald-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            <div className="bg-[#121615] p-6 sm:p-8 rounded-2xl border border-emerald-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white">
                  Professional Development
                </h4>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Alongside my full-time role, I am pursuing a B.Sc. in Computer Science and Engineering at United International University. This combination of professional and academic experience is helping me strengthen my communication, leadership, analytical thinking, and technical foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
