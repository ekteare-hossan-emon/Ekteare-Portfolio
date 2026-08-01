import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Menu, X, ArrowUpRight, Terminal, FileText, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenTerminal: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Credentials', href: '#credentials' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-[#2A2A2A] py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white font-heading font-bold text-lg tracking-wider"
        >
          <div className="w-8 h-8 rounded-lg bg-[#171717] border border-[#2A2A2A] group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold transition-all">
            {portfolioData.personal.initials}
          </div>
          <span className="tracking-tight hover:text-cyan-400 transition-colors">
            {portfolioData.personal.name}
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/80 p-1.5 rounded-full border border-[#2A2A2A] backdrop-blur-sm">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Cyber Terminal trigger */}
          <button
            onClick={onOpenTerminal}
            className="p-2.5 bg-[#171717] hover:bg-[#1E1E1E] text-cyan-400 hover:text-cyan-300 border border-[#2A2A2A] hover:border-cyan-500/40 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5"
            title="Open Interactive Cyber CLI"
            aria-label="Open Interactive Cyber CLI"
          >
            <Terminal className="w-4 h-4" />
            <span className="hidden md:inline">CLI</span>
          </button>

          {/* Download CV */}
          <button
            onClick={onOpenCv}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black hover:bg-cyan-300 font-semibold rounded-xl text-xs transition-all shadow-md shadow-white/5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 bg-[#171717] text-cyan-400 border border-[#2A2A2A] rounded-lg hover:border-cyan-500/40 transition-colors"
            aria-label="Open CLI"
            title="Open CLI"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#171717] text-zinc-300 hover:text-white border border-[#2A2A2A] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808]/95 border-b border-[#2A2A2A] px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-cyan-400 hover:bg-[#171717] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-zinc-600">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2A2A2A] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#171717] text-cyan-400 border border-cyan-500/30 rounded-xl text-sm font-mono"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Cyber CLI</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 text-black font-semibold rounded-xl text-sm shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-transform"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
