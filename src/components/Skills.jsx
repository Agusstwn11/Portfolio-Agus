import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
  BarChart3,
  Network,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    "Web Development": Code2,
    "Data Analysis & BI": BarChart3,
    "Network Engineering": Network,
    "Software QA & Testing": CheckCircle2,
    "Database & Tools": Database,
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Keahlian Teknis
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Penguasaan bahasa pemrograman, framework modern, teknologi rekayasa data & BI, pengujian software otomatis, dan konfigurasi jaringan enterprise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || Layers;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-slate-700/80 transition-all group glow-card shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-sky-400 group-hover:scale-105 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {group.category}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/90 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{skill.name}</span>
                        {skill.level === 'Certified' && (
                          <span className="text-[10px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-md">
                            BNSP
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
