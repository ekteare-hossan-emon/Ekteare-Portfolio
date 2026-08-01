import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Terminal, X, CornerDownLeft, Shield, Sparkles } from 'lucide-react';

interface CyberTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCv: () => void;
  onToast: (msg: string) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const CyberTerminal: React.FC<CyberTerminalProps> = ({ isOpen, onClose, onOpenCv, onToast }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init',
      command: 'sys_init',
      output: (
        <div className="space-y-1 text-xs text-zinc-300 font-mono">
          <p className="text-cyan-400 font-bold">EKTEARE HOSSAN EMON SECURITY CLI v2.4 [Connected to Security Operations Hub]</p>
          <p className="text-zinc-400">Type <span className="text-amber-300 font-bold">help</span> to view available system commands.</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-zinc-300">
            <p className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-amber-300 w-24 inline-block">whoami</span> - Displays bio and current credentials</p>
            <p><span className="text-amber-300 w-24 inline-block">skills</span> - Lists cybersecurity, networking & account management skills</p>
            <p><span className="text-amber-300 w-24 inline-block">projects</span> - Displays key technical projects</p>
            <p><span className="text-amber-300 w-24 inline-block">contact</span> - Shows contact channels and email</p>
            <p><span className="text-amber-300 w-24 inline-block">cv</span> - Opens full Curriculum Vitae viewer</p>
            <p><span className="text-amber-300 w-24 inline-block">clear</span> - Clears the terminal screen</p>
            <p><span className="text-amber-300 w-24 inline-block">exit</span> - Closes the terminal drawer</p>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-zinc-300 bg-[#171717] p-3 rounded border border-[#2A2A2A]">
            <p className="text-white font-bold">{portfolioData.personal.name} ({portfolioData.personal.initials})</p>
            <p className="text-cyan-400">{portfolioData.personal.title}</p>
            <p className="text-zinc-400">{portfolioData.personal.fullBio}</p>
            <p className="text-emerald-400 pt-1">Status: {portfolioData.personal.availability}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            {portfolioData.skills.map((cat) => (
              <div key={cat.id} className="border-l-2 border-cyan-500/50 pl-3 py-1">
                <p className="text-cyan-300 font-bold">{cat.title.toUpperCase()}:</p>
                <p className="text-zinc-400">{cat.skills.map(s => `${s.name} [${s.proficiency}]`).join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            {portfolioData.projects.map((p) => (
              <div key={p.id} className="bg-[#171717] p-2.5 rounded border border-[#2A2A2A]">
                <p className="text-white font-bold">{p.title} <span className="text-cyan-400">({p.category})</span></p>
                <p className="text-zinc-400 text-[11px]">{p.summary}</p>
                <p className="text-amber-300/80 text-[10px] mt-1">Stack: {p.stack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-zinc-300 bg-[#171717] p-3 rounded border border-cyan-500/30">
            <p className="text-cyan-400 font-bold">CONTACT INFO:</p>
            <p>Email: <span className="text-white">{portfolioData.personal.email}</span></p>
            <p>Location: <span className="text-white">{portfolioData.personal.location}</span></p>
            <p>University: <span className="text-white">{portfolioData.personal.university}</span></p>
          </div>
        );
        break;

      case 'cv':
        onOpenCv();
        outputNode = (
          <p className="text-xs font-mono text-cyan-400">Opening Curriculum Vitae modal...</p>
        );
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: <span className="text-white">{cmd}</span>. Type <span className="text-cyan-400">help</span> for command list.
          </p>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        command: input,
        output: outputNode
      }
    ]);

    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl h-[80vh] flex flex-col bg-[#0A0A0A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden shadow-cyan-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-[#2A2A2A]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-2 ml-3 text-xs font-mono text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>emon@cyber-node:~ (bash)</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 font-mono text-xs selection:bg-cyan-500/30">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-cyan-400 font-bold">emon@cyber-node:~$</span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
              <div className="pl-4">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input prompt footer */}
        <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-t border-[#2A2A2A]">
          <span className="text-cyan-400 font-mono font-bold text-xs shrink-0">emon@cyber-node:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or 'whoami'..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-zinc-600"
          />
          <button
            type="submit"
            className="p-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded transition-colors border border-cyan-500/30 shrink-0"
            aria-label="Send command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
