import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { ShieldCheck, Network, Terminal, Users, Search, Code, Compass, Sparkles } from 'lucide-react';

export const Expertise: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Network': return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-cyan-400" />;
      default: return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getProficiencyBadge = (level: string) => {
    switch (level) {
      case 'Proficient':
        return <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">Proficient</span>;
      case 'Working Knowledge':
        return <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded">Working Knowledge</span>;
      case 'Developing':
        return <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded">Developing</span>;
      case 'Familiar':
        return <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded">Familiar</span>;
      case 'Learning':
        return <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded">Learning</span>;
      default:
        return null;
    }
  };

  const filteredSkills = skills.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const titleMatch = cat.title.toLowerCase().includes(query);
    const skillMatch = cat.skills.some(s => s.name.toLowerCase().includes(query));
    return titleMatch || skillMatch;
  });

  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="02 / CAPABILITIES"
          title="CAPABILITIES ACROSS TECHNOLOGY, COMMUNICATION AND LEADERSHIP"
          subtitle="Developing technical skills through my CSE studies while applying communication, coordination, and account management experience in professional and university environments."
        />

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1F1F1F]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#171717] text-zinc-400 hover:text-white border border-[#2A2A2A]'
              }`}
            >
              All Categories
            </button>
            {skills.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-[#171717] text-zinc-400 hover:text-white border border-[#2A2A2A]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Filter Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-cyan-500 text-white text-xs rounded-xl pl-9 pr-4 py-2 focus:outline-none placeholder:text-zinc-600 transition-colors"
            />
          </div>
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((category) => (
            <div
              key={category.id}
              className="bg-[#121212] p-6 sm:p-8 rounded-2xl border border-[#2A2A2A] hover:border-cyan-500/30 transition-all space-y-6 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between border-b border-[#222222] pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-zinc-400">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Skill Tags List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 bg-[#181818] rounded-xl border border-[#262626] hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-zinc-200 leading-snug">
                        {skill.name}
                      </span>
                      {skill.isKeySkill && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1" title="Core Specialty" />
                      )}
                    </div>
                    <div>{getProficiencyBadge(skill.proficiency)}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Career Development Callout Card */}
        <div className="mt-10 bg-[#121615] p-6 sm:p-8 rounded-2xl border border-cyan-500/30 space-y-3 shadow-xl">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-heading font-bold text-white">
              Career Development
            </h4>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Currently building a strong foundation in computer science and preparing to develop future skills in cybersecurity, computer networking, Linux, Cisco Packet Tracer, and Wireshark.
          </p>
        </div>
      </div>
    </section>
  );
};
