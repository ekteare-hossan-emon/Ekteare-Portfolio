import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Copy, Check, FileText, Mail, MapPin, Globe, GraduationCap, Briefcase, Award, Shield } from 'lucide-react';

interface AboutProps {
  onOpenCv: () => void;
  onToast: (msg: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCv, onToast }) => {
  const { personal } = portfolioData;
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    onToast("Email copied to clipboard: " + personal.email);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#080808] border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="01 / ABOUT"
          title="TECHNICAL CURIOSITY MEETS COMMUNICATION AND LEADERSHIP."
          subtitle="Combining technical computer science rigor in cybersecurity and networking with proven account management and student leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Biography, Objective, Philosophy */}
          <div className="lg:col-span-7 space-y-8 text-zinc-300">
            {/* Biography */}
            <div className="space-y-4 text-base leading-relaxed">
              <p className="text-zinc-200 font-normal">
                I am a dedicated Computer Science student at United International University (UIU) driven by a deep fascination with how data moves securely across global computer networks. My academic specialization centers on <span className="text-cyan-400 font-medium">Cybersecurity and Computer Networking</span>, including packet inspection, firewalls, threat identification, and network architecture design.
              </p>

              <p>
                Beyond technical computer science, I bring hands-on professional experience as an <span className="text-white font-medium">Account Manager</span>. Managing enterprise client accounts taught me how to articulate complex technical ideas clearly, resolve customer concerns under pressure, and manage high-stakes client expectations with empathetic listening and structured follow-up.
              </p>

              <p>
                In parallel, my leadership as <span className="text-white font-medium">Senior Executive at UIU English Language Forum</span> and <span className="text-white font-medium">Running Executive at UIU Sports Club</span> has honed my event management, sports tournament logistics, public speaking, and team leadership skills. I regularly facilitate communication workshops, co-manage inter-department athletic competitions, and empower fellow students to build confidence in leadership and professional English.
              </p>
            </div>

            {/* Career Objective Box */}
            <div className="p-6 rounded-xl bg-[#111111] border border-[#2A2A2A] space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Career Objective</span>
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {personal.careerObjective}
              </p>
            </div>

            {/* Personal Philosophy Box */}
            <div className="p-6 rounded-xl bg-[#111111] border border-[#2A2A2A] space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Professional Philosophy</span>
              </h3>
              <blockquote className="text-sm text-zinc-200 italic font-sans leading-relaxed border-l-2 border-cyan-500 pl-3 py-1">
                "{personal.philosophy}"
              </blockquote>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#171717] hover:bg-[#222222] text-white border border-[#2A2A2A] hover:border-cyan-500/40 rounded-xl text-sm font-medium transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
              </button>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl text-sm transition-all shadow-md shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>Download Full CV</span>
              </button>
            </div>
          </div>

          {/* Right Column - Structured Info Panel */}
          <div className="lg:col-span-5 bg-[#111111] p-6 sm:p-8 rounded-2xl border border-[#2A2A2A] space-y-6 shadow-xl">
            <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-[#2A2A2A] pb-3 flex items-center justify-between">
              <span>Candidate Profile</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </h3>

            <div className="space-y-4 text-sm font-sans">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-[#1A1A1A] pb-3 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">Full Name</span>
                <span className="text-white font-semibold text-left sm:text-right">{personal.name}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-[#1A1A1A] pb-3 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">Current Role</span>
                <span className="text-cyan-300 font-medium text-left sm:text-right text-xs">CS Student & Account Mgr</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-[#1A1A1A] pb-3 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">Field of Study</span>
                <span className="text-white text-left sm:text-right text-xs">{personal.fieldOfStudy}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-[#1A1A1A] pb-3 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">University</span>
                <span className="text-white text-left sm:text-right text-xs">{personal.university}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-[#1A1A1A] pb-3 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">Location</span>
                <span className="text-white text-left sm:text-right text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400 inline shrink-0" />
                  {personal.location}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-[#1A1A1A] pb-3 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">Languages</span>
                <span className="text-white text-left sm:text-right text-xs">{personal.languages.join(' • ')}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-[#1A1A1A] pb-3 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">Availability</span>
                <span className="text-emerald-400 text-left sm:text-right text-xs font-medium">Internships & Roles</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center pt-1 gap-1">
                <span className="text-zinc-500 text-xs font-mono shrink-0">Contact Email</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-cyan-400 hover:underline text-xs font-mono text-left sm:text-right break-all"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
