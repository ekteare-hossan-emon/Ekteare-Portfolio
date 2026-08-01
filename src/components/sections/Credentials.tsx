import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { BookOpen, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Credentials: React.FC = () => {
  const { certifications } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cybersecurity', 'Networking', 'Communication'];

  const filteredCerts = certifications.filter((cert) => {
    if (activeCategory === 'All') return true;
    return cert.category === activeCategory;
  });

  return (
    <section id="credentials" className="py-20 md:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="06 / DEVELOPMENT"
          title="CONTINUOUS LEARNING AND PROFESSIONAL DEVELOPMENT"
          subtitle="Building foundational knowledge in networking, cybersecurity, and professional communication through academic studies, self-learning, practical exercises, and student leadership."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#1F1F1F] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#171717] text-zinc-400 hover:text-white border border-[#2A2A2A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials & Development Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#121212] p-6 rounded-2xl border border-[#2A2A2A] hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-5 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#1A1A1A] border border-[#2A2A2A] text-cyan-400 rounded-xl">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded uppercase">
                          {cert.category}
                        </span>
                        {cert.status && (
                          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Status: {cert.status}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-heading font-bold text-white mt-1.5">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-400 hover:text-cyan-400 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] rounded-lg transition-colors shrink-0"
                      title="Verify Credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="text-xs font-mono text-zinc-400">
                  <span>Method / Source: <strong className="text-zinc-200 font-sans">{cert.issuer}</strong></span>
                </div>

                {/* Mentions / Highlights if present */}
                {cert.highlights && cert.highlights.length > 0 && (
                  <div className="p-3 bg-[#171717] border border-[#262626] rounded-xl space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">Leadership & Experience Context</span>
                    <div className="space-y-1">
                      {cert.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Skills covered */}
              <div className="pt-3 border-t border-[#1F1F1F] space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Key Focus & Competencies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono bg-[#181818] text-zinc-200 border border-[#2A2A2A] rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
