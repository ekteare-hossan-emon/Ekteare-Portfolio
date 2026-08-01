import React from 'react';

interface SectionHeaderProps {
  label: string; // e.g. "01 / ABOUT"
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  className = ""
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {label}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-snug sm:leading-tight max-w-4xl break-words">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
