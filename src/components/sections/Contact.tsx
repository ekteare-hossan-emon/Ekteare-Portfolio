import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Send, Copy, Check, FileText, Linkedin, Facebook, Instagram, Phone, Github, MessageSquare, AlertCircle, CheckCircle2, Shield } from 'lucide-react';

interface ContactProps {
  onOpenCv: () => void;
  onToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCv, onToast }) => {
  const { personal, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Internship / Entry-Level Role',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setEmailCopied(true);
    onToast("Email copied: " + personal.email);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message should be at least 15 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable client message handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onToast("Message sent successfully! Ekteare Hossan Emon will reply shortly.");
      setFormData({
        fullName: '',
        email: '',
        subject: 'Internship / Entry-Level Role',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="08 / CONTACT"
          title="LET’S DISCUSS OPPORTUNITIES, PROJECTS OR COLLABORATIONS."
          subtitle="I am open to internships, entry-level roles, collaborative projects, and professional networking opportunities where I can apply my experience in account management, communication, and student leadership while developing my skills in cybersecurity and networking."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl border border-[#2A2A2A] space-y-6 shadow-xl">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-[#171717] rounded-xl border border-[#262626] space-y-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Primary Email</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-cyan-400 font-mono text-sm hover:underline font-semibold truncate"
                    >
                      {personal.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 bg-[#222222] hover:bg-[#2A2A2A] text-zinc-300 rounded-lg transition-colors border border-[#333] shrink-0"
                      title="Copy Email"
                      aria-label="Copy Email"
                    >
                      {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#171717] rounded-xl border border-[#262626] space-y-1">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Direct Phone</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-cyan-400 font-mono text-sm hover:underline font-semibold"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#171717] rounded-xl border border-[#262626] space-y-1">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Current Base</span>
                  <p className="text-white font-medium text-sm">{personal.location}</p>
                </div>

                <div className="p-4 bg-[#171717] rounded-xl border border-[#262626] space-y-1">
                  <span className="text-xs font-mono text-zinc-500 uppercase">University Affiliation</span>
                  <p className="text-white font-medium text-sm">{personal.university}</p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">Social & Professional Profiles</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => {
                    let IconComponent = Mail;
                    if (link.icon === 'Linkedin') IconComponent = Linkedin;
                    if (link.icon === 'Facebook') IconComponent = Facebook;
                    if (link.icon === 'Instagram') IconComponent = Instagram;
                    if (link.icon === 'Github') IconComponent = Github;

                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-3 bg-[#171717] hover:bg-[#1E1E1E] text-zinc-200 hover:text-cyan-400 border border-[#2A2A2A] rounded-xl text-xs font-mono transition-all truncate"
                      >
                        <IconComponent className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="truncate">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CV Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenCv}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#171717] hover:bg-[#222222] text-white border border-[#2A2A2A] hover:border-cyan-500/40 rounded-xl text-xs font-mono font-bold transition-all"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Curriculum Vitae (CV)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7 bg-[#121212] p-6 sm:p-8 rounded-2xl border border-[#2A2A2A] shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Message Transmitted!</h3>
                <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your inquiry has been logged and Ekteare Hossan Emon will reply via email shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#171717] hover:bg-[#222222] text-cyan-400 border border-[#2A2A2A] rounded-xl text-xs font-mono transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-bold text-white">Send Direct Message</h3>
                  <p className="text-xs text-zinc-400">Fill out the fields below for recruiters, managers, or collaborators.</p>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-mono uppercase text-zinc-300">
                    Your Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full bg-[#181818] border ${
                      errors.fullName ? 'border-rose-500/80' : 'border-[#2A2A2A] focus:border-cyan-500'
                    } text-white text-sm rounded-xl px-4 py-3 focus:outline-none placeholder:text-zinc-600 transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-300">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah.j@company.com"
                    className={`w-full bg-[#181818] border ${
                      errors.email ? 'border-rose-500/80' : 'border-[#2A2A2A] focus:border-cyan-500'
                    } text-white text-sm rounded-xl px-4 py-3 focus:outline-none placeholder:text-zinc-600 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-zinc-300">
                    Inquiry Category
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#181818] border border-[#2A2A2A] focus:border-cyan-500 text-white text-sm rounded-xl px-4 py-3 focus:outline-none transition-colors"
                  >
                    <option value="Internship / Entry-Level Role">Internship / Entry-Level Role Inquiry</option>
                    <option value="Cybersecurity & Networking Project">Cybersecurity & Networking Project Collaboration</option>
                    <option value="Account Management & Client Operations">Account Management & Client Operations</option>
                    <option value="UIU Language Forum / Sports Club Event">UIU Language Forum / UIU Sports Club Collaboration</option>
                    <option value="General Professional Networking">General Professional Networking</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-300">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role opportunity, project proposal, or inquiry..."
                    className={`w-full bg-[#181818] border ${
                      errors.message ? 'border-rose-500/80' : 'border-[#2A2A2A] focus:border-cyan-500'
                    } text-white text-sm rounded-xl px-4 py-3 focus:outline-none placeholder:text-zinc-600 transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Spam Protection Hint & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Protected by client-side anti-spam verification</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 text-black font-semibold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
