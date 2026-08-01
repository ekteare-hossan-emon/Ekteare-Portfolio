import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowDown, FileText, Mail, Terminal, ShieldCheck, Network, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCv: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenTerminal }) => {
  const { personal, metrics } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-[#1A1A1A]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Main Copy & Headline */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
              <span>{personal.availability}</span>
            </div>

            {/* Primary Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] sm:leading-[1.08] break-words">
                I BUILD DIGITAL EXPERIENCES AND DEVELOP TOWARDS A FUTURE IN CYBERSECURITY.
              </h1>
              <p className="text-cyan-400 font-mono text-sm sm:text-base tracking-wide font-medium">
                CYBERSECURITY • NETWORKING • ACCOUNT MANAGEMENT
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              {personal.fullBio}
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] hover:bg-[#222222] text-white border border-[#2A2A2A] hover:border-cyan-500/40 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 rounded-lg text-xs font-mono hover:bg-cyan-900/50 transition-colors"
                title="Open Terminal CLI"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Terminal CLI</span>
              </button>
            </div>
          </div>

          {/* Right Column - Studio Editorial Portrait with Cyber Node Overlay */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#111111] group shadow-2xl">
              
              {/* Subtle Cyan Rim Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-600/10 opacity-70 pointer-events-none group-hover:opacity-100 transition-opacity" />

              {/* Network Node Grid Decorative Background Pattern */}
              <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none" />

              {/* Portrait Image / Natural Color Styling */}
              {!imageError ? (
                <img
                  src={personal.portraitUrl}
                  alt={`Studio portrait of ${personal.name} - Computer Science Student & Cybersecurity Specialist`}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* High-tech Stylized Fallback Avatar */
                <div className="w-full h-full bg-[#141414] flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-heading font-bold text-lg">{personal.name}</h3>
                    <p className="text-xs font-mono text-cyan-400">{personal.title}</p>
                  </div>
                </div>
              )}

              {/* Bottom Gradient Blend into Dark Background */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />

              {/* Floating Cyber Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#111111]/90 backdrop-blur-md border border-[#2A2A2A] flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{personal.name}</p>
                  <p className="text-xs font-sans text-zinc-300">{personal.university}</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-cyan-500/10 rounded-md border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Statistics Row */}
        <div className="mt-16 pt-10 border-t border-[#1F1F1F] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#111111]/60 p-5 rounded-xl border border-[#2A2A2A] hover:border-cyan-500/30 transition-all space-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-cyan-400">{metric.value}</span>
                </div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold leading-snug">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
