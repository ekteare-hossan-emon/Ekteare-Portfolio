import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Award, Users, Calendar, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

export const Leadership: React.FC = () => {
  const { leadership } = portfolioData;
  const [activeRoleIdx, setActiveRoleIdx] = useState<number>(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  if (!leadership || leadership.length === 0) return null;

  const lead = leadership[activeRoleIdx] || leadership[0];
  const activePhoto = lead.gallery[activePhotoIdx] || lead.gallery[0];

  const handleSelectRole = (idx: number) => {
    setActiveRoleIdx(idx);
    setActivePhotoIdx(0);
  };

  const handleNextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % lead.gallery.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + lead.gallery.length) % lead.gallery.length);
  };

  return (
    <section id="leadership" className="py-20 md:py-28 bg-[#080808] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="05 / LEADERSHIP"
          title="LEADERSHIP THROUGH COMMUNICATION, RESPONSIBILITY AND COMMUNITY"
          subtitle="Contributing to student development through communication, teamwork, event coordination, and campus engagement at United International University."
        />

        {/* Leadership Role Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 border-b border-[#1F1F1F] pb-5">
          {leadership.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelectRole(idx)}
              className={`px-3.5 sm:px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 text-left max-w-full ${
                activeRoleIdx === idx
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'bg-[#141414] text-zinc-400 hover:text-white border border-[#2A2A2A]'
              }`}
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate max-w-[240px] xs:max-w-none">{item.role} • {item.organization.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column - Role Details & Responsibilities */}
          <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 rounded-2xl border border-[#2A2A2A] space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222222] pb-4">
              <div>
                <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded">
                  Student Leadership
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mt-1">
                  {lead.role}
                </h3>
                <p className="text-cyan-400 font-medium text-sm">
                  {lead.organization}
                </p>
              </div>

              <span className="flex items-center gap-1.5 bg-[#181818] px-3 py-1.5 rounded-lg border border-[#2A2A2A] text-xs font-mono text-zinc-400 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {lead.period}
              </span>
            </div>

            {/* Overview */}
            <p className="text-zinc-300 text-sm leading-relaxed">
              {lead.overview}
            </p>

            {/* Responsibilities */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Core Responsibilities</h4>
              <ul className="space-y-2">
                {lead.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Achievements */}
            {lead.achievements && lead.achievements.length > 0 && (
              <div className="space-y-2 bg-[#171717] p-5 rounded-xl border border-[#2A2A2A]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Forum Impact & Milestones</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300 pt-1">
                  {lead.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Event Photo Gallery Carousel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#111111] aspect-[4/3] group shadow-2xl">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-cover transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h4 className="text-white font-heading font-bold text-base">{activePhoto.title}</h4>
                <p className="text-xs text-zinc-300 line-clamp-2">{activePhoto.caption}</p>
              </div>

              {/* Gallery Controls */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all opacity-80 group-hover:opacity-100"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all opacity-80 group-hover:opacity-100"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-3 gap-2">
              {lead.gallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative rounded-lg overflow-hidden aspect-[4/3] border transition-all ${
                    activePhotoIdx === idx
                      ? 'border-cyan-400 ring-2 ring-cyan-500/30 opacity-100'
                      : 'border-[#2A2A2A] opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
