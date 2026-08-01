import React, { useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';
import { X, Download, Printer, FileText, CheckCircle2, Shield, Mail, Phone, MapPin } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, skills, experience, education, certifications, leadership } = portfolioData;

  const handleDownloadTxt = () => {
    const cvContent = `
===================================================================
${personal.name} - CURRICULUM VITAE
${personal.title}
Email: ${personal.email} | Phone: ${personal.phone || ''} | Location: ${personal.location}
===================================================================

PROFESSIONAL SUMMARY
${personal.fullBio}

CAREER OBJECTIVE
${personal.careerObjective}

EDUCATION
${education.map(e => `
• ${e.degree}
  Institution: ${e.institution} (${e.period})
  Key Coursework: ${e.relevantCoursework.join(', ')}
`).join('\n')}

PROFESSIONAL EXPERIENCE
${experience.map(exp => `
• ${exp.role} - ${exp.company} (${exp.period})
  Location: ${exp.location} | Type: ${exp.type}
  Summary: ${exp.summary}
  Key Responsibilities:
${exp.responsibilities.map(r => `  - ${r}`).join('\n')}
  Skills Used: ${exp.skillsUsed.join(', ')}
`).join('\n')}

LEADERSHIP & EXTRA-CURRICULAR
${leadership.map(l => `
• ${l.role} - ${l.organization} (${l.period})
  Summary: ${l.overview}
  Responsibilities:
${l.responsibilities.map(r => `  - ${r}`).join('\n')}
`).join('\n')}

CORE TECHNICAL & PROFESSIONAL SKILLS
${skills.map(s => `
• ${s.title}:
  ${s.skills.map(sk => `${sk.name} (${sk.proficiency})`).join(', ')}
`).join('\n')}

CERTIFICATIONS & CREDENTIALS
${certifications.map(c => `• ${c.title} - ${c.issuer} (${c.issueDate}) [ID: ${c.credentialId}]`).join('\n')}

===================================================================
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ekteare_Hossan_Emon_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onToast("CV downloaded successfully as text file!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#F5F5F5] space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white">Curriculum Vitae</h3>
              <p className="text-xs text-zinc-400 font-mono">Ekteare Hossan Emon • Cybersecurity & Account Management</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] hover:bg-[#2A2A2A] text-zinc-300 rounded-lg text-xs border border-[#2A2A2A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors ml-2"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="bg-[#080808] p-6 sm:p-8 rounded-xl border border-[#2A2A2A] space-y-6 font-sans text-sm print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-[#2A2A2A] pb-6 space-y-2">
            <h1 className="text-2xl font-heading font-bold text-white tracking-wide">{personal.name}</h1>
            <p className="text-cyan-400 font-medium text-xs sm:text-sm">{personal.title}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1 font-mono">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {personal.email}</span>
              {personal.phone && (
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {personal.phone}</span>
              )}
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personal.location}</span>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 border-b border-[#2A2A2A] pb-1">Professional Objective</h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{personal.careerObjective}</p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 border-b border-[#2A2A2A] pb-1">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="space-y-1">
                <div className="flex justify-between font-semibold text-white">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-xs text-zinc-400">{edu.period}</span>
                </div>
                <p className="text-xs text-cyan-300">{edu.institution}, {edu.location}</p>
                <p className="text-xs text-zinc-400 pt-1">
                  <strong className="text-zinc-300 font-mono">Relevant Coursework:</strong> {edu.relevantCoursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 border-b border-[#2A2A2A] pb-1">Professional Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex justify-between font-semibold text-white">
                  <span>{exp.role} — <span className="text-cyan-300 font-normal">{exp.company}</span></span>
                  <span className="font-mono text-xs text-zinc-400">{exp.period}</span>
                </div>
                <p className="text-xs text-zinc-400">{exp.summary}</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pl-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 border-b border-[#2A2A2A] pb-1">Leadership & Forum Roles</h2>
            {leadership.map((lead) => (
              <div key={lead.id} className="space-y-1.5">
                <div className="flex justify-between font-semibold text-white">
                  <span>{lead.role} — <span className="text-cyan-300 font-normal">{lead.organization}</span></span>
                  <span className="font-mono text-xs text-zinc-400">{lead.period}</span>
                </div>
                <p className="text-xs text-zinc-400">{lead.overview}</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pl-1">
                  {lead.responsibilities.slice(0, 3).map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 border-b border-[#2A2A2A] pb-1">Certifications & Credentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="bg-[#171717] p-2.5 rounded border border-[#2A2A2A]">
                  <p className="font-medium text-white">{c.title}</p>
                  <p className="text-zinc-400 text-[11px]">{c.issuer} ({c.issueDate})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-[#2A2A2A] pt-4">
          <p className="text-xs text-zinc-500 font-mono">
            Verified candidate profile for Ekteare Hossan Emon
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#171717] hover:bg-[#2A2A2A] text-white border border-[#2A2A2A] rounded-xl text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
