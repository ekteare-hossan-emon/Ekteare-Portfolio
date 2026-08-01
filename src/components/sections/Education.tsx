import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 bg-[#080808] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="07 / EDUCATION"
          title="ACADEMIC FOUNDATION"
          subtitle="Building a strong foundation in computer science through undergraduate studies in programming, computer systems, digital logic, mathematics, and problem-solving, with a growing interest in cybersecurity and computer networking."
        />

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-[#2A2A2A] hover:border-cyan-500/30 transition-all space-y-6 shadow-xl"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#222222] pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#181818] border border-[#2A2A2A] text-cyan-400 rounded-xl mt-1 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded">
                      {item.id === 'edu-2' ? 'Higher Studies Progression' : 'Undergraduate Degree'}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white mt-1">
                      {item.degree}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">
                      {item.institution}
                    </p>
                  </div>
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

              {/* Coursework Tags */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Relevant Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-xs font-mono bg-[#171717] text-zinc-200 border border-[#2A2A2A] rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#1F1F1F]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {item.id === 'edu-2' ? 'Progression Highlights' : 'Leadership and Professional Development'}
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {item.academicHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
