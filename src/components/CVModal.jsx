import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, ExternalLink, CheckCircle } from 'lucide-react';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, experiences, skills, socialLinks } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">Curriculum Vitae Preview</span>
            <span className="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              PDF Ready
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Content Sheet */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto bg-slate-950/60 text-slate-300 print:bg-white print:text-black print:p-0">
          {/* Header info */}
          <div className="border-b border-slate-800 pb-5">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {personal.name}
            </h2>
            <p className="text-indigo-400 font-medium text-sm mt-0.5">
              {personal.role}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              {personal.location} • {socialLinks.gmail} • {socialLinks.whatsapp}
            </p>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              Summary
            </h3>
            <p className="text-xs leading-relaxed text-slate-300">
              {personal.about}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Education
            </h3>
            <div className="text-xs space-y-1">
              <div className="flex justify-between font-medium text-white">
                <span>{education.institution}</span>
                <span className="text-slate-400">{education.period}</span>
              </div>
              <p className="text-indigo-300">{education.degree} (GPA: {education.gpa})</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="flex justify-between font-medium text-white">
                    <span>{exp.role} — <span className="text-indigo-300">{exp.company}</span></span>
                    <span className="text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Core Skills
            </h3>
            <div className="text-xs space-y-1">
              <p><strong className="text-slate-200">Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind CSS</p>
              <p><strong className="text-slate-200">Backend & DB:</strong> PHP, Laravel, REST API, MySQL</p>
              <p><strong className="text-slate-200">Tools & Others:</strong> Git, GitHub, VS Code, Android Studio, Kotlin</p>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <p className="text-[11px] text-slate-400">
            Tip: Anda juga bisa meletakkan file PDF asli Anda di folder <code className="text-indigo-300">/public/cv.pdf</code>
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all shadow-md shadow-indigo-600/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
