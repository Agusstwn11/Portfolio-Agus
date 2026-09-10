import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Radio,
  Layers,
  BarChart3,
  Network
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    "Web Development": Code2,
    "Data Analysis & Science": BarChart3,
    "Network Engineering": Network,
    "Database Systems": Database,
    "Developer Tools & Mobile": Wrench,
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Languages, frameworks, databases, and developer utilities that I use to bring ideas to reality.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || Layers;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all group glow-card"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-indigo-400 group-hover:text-sky-400 group-hover:bg-slate-800 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        {group.category}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-xs font-medium text-slate-200 hover:border-indigo-500/50 hover:bg-slate-900 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{skill.name}</span>
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
