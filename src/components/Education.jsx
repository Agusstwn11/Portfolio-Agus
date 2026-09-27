import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-white dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Pendidikan & Kualifikasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Fondasi pendidikan tinggi formal di bidang Teknik Informatika dengan reputasi akademis unggul.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-sm dark:shadow-2xl relative overflow-hidden glow-card">
            
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/30 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <p className="text-base text-indigo-600 dark:text-indigo-300 font-semibold mt-1">
                    {education.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Jakarta, Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA Badge */}
              <div className="sm:text-right shrink-0">
                <div className="inline-flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    IPK
                  </span>
                  <span className="text-2xl font-black text-amber-600 dark:text-amber-300 font-mono">
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Key Coursework */}
            <div className="pt-6 space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {education.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Academic Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {education.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
