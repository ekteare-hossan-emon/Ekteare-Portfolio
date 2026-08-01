import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowUp, Shield, Linkedin, Github, Facebook, Instagram, Mail, Send, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'facebook': return <Facebook className="w-4 h-4" />;
      case 'instagram': return <Instagram className="w-4 h-4" />;
      case 'github': return <Github className="w-4 h-4" />;
      case 'mail': return <Mail className="w-4 h-4" />;
      case 'send': return <Send className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-[#2A2A2A] text-zinc-400 py-12 md:py-16 relative overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#171717] border border-[#2A2A2A] flex items-center justify-center text-cyan-400 text-sm font-mono font-bold">
                {portfolioData.personal.initials}
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-lg">{portfolioData.personal.name}</h3>
                <p className="text-xs text-zinc-500 font-mono">Cybersecurity • Networking • Account Management</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Computer Science student building secure digital infrastructures and cultivating high-trust professional client relationships.
            </p>
          </div>

          {/* Quick Links & Socials */}
          <div className="md:col-span-6 flex flex-wrap justify-between gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">01 / About</a></li>
                <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">02 / Expertise</a></li>
                <li><a href="#experience" className="hover:text-cyan-400 transition-colors">03 / Experience</a></li>
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors">04 / Projects</a></li>
                <li><a href="#leadership" className="hover:text-cyan-400 transition-colors">05 / Leadership</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Social Connect</h4>
              <div className="flex flex-col gap-2">
                {portfolioData.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    {getSocialIcon(social.icon)}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Interactive CLI</h4>
              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#171717] hover:bg-[#1E1E1E] text-cyan-400 border border-[#2A2A2A] rounded-xl text-xs font-mono transition-all"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Launch Cyber Terminal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#171717] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Designed and developed with clarity, security, and purpose.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] hover:bg-[#2A2A2A] text-zinc-300 hover:text-cyan-400 border border-[#2A2A2A] rounded-lg transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
