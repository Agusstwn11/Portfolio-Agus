import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, ExternalLink, CheckCircle } from 'lucide-react';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, experiences, skills, socialLinks, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 dark:bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-white">Curriculum Vitae Preview</span>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
              Print / Save PDF
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Content Sheet */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto bg-white dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 print:bg-white print:text-black print:p-0">
          
          {/* Header info */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {personal.name}
            </h2>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-0.5">
              {personal.role}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
              {personal.location} • {socialLinks.gmail} • {socialLinks.whatsapp}
            </p>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
              Ringkasan Profil
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {personal.about}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Pendidikan
            </h3>
            <div className="text-xs space-y-1">
              <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                <span>{education.institution}</span>
                <span className="text-slate-500 dark:text-slate-400 font-mono">{education.period}</span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-300 font-medium">{education.degree} (IPK: {education.gpa})</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Pengalaman Kerja & Magang
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                    <span>{exp.role} — <span className="text-indigo-600 dark:text-indigo-300">{exp.company}</span></span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Highlights */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Sertifikasi Utama
            </h3>
            <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-300">
              <li><strong>BNSP</strong>: KKNI Level II Teknik Komputer dan Jaringan (Reg: TIK 004 0000105 2022)</li>
              <li><strong>Simplilearn x Microsoft</strong>: Power BI for Beginners & Free Data Analyst Course</li>
              <li><strong>Microsoft Office</strong>: Predikat Sangat Baik (Rata-rata 81) - Yayasan Abdi Karya & CV Sabar Parade Wedya</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Keahlian Teknis
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.flatMap((s) => s.items).map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
