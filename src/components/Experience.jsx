import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';
import {
  Briefcase,
  Users,
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles,
  Award,
  FileCheck2
} from 'lucide-react';

export default function Experience() {
  const { experiences, organizations } = portfolioData;
  const [activeTab, setActiveTab] = useState('work'); // 'work' | 'org'
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-wider">
            Career & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Organizations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on professional internships with verified certificates and student organization leadership roles.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 inline-flex gap-1">
            <button
              onClick={() => setActiveTab('work')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'work'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work & Internships ({experiences.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('org')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'org'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership & Organizations ({organizations.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'work' ? (
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-800 sm:before:left-1/2 sm:before:-ml-px">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                >
                  {/* Timeline Center Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-indigo-600 text-white shadow-lg shrink-0 z-10 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className="w-[calc(100%-3.5rem)] sm:w-[calc(50%-2.5rem)] rounded-2xl bg-slate-900/80 border border-slate-800 p-6 shadow-xl hover:border-slate-700 transition-all glow-card">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-medium mt-1 mb-3">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Certificate Badge & Button */}
                    {exp.hasCertificate && exp.certificate && (
                      <div className="mb-4 p-3 rounded-xl bg-slate-950/70 border border-amber-500/25 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-400 shrink-0" />
                          <div className="text-[11px]">
                            <span className="text-amber-300 font-medium">Sertifikat Resmi</span>
                            <span className="text-slate-400 block text-[10px]">Tersedia & Terverifikasi</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedCert(exp.certificate)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-[11px] font-medium border border-amber-500/30 transition-colors"
                        >
                          <FileCheck2 className="w-3.5 h-3.5" />
                          <span>Lihat</span>
                        </button>
                      </div>
                    )}

                    {/* Skill badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {organizations.map((org, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all glow-card"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">
                        {org.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {org.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white">
                        {org.role}
                      </h3>
                      <p className="text-xs text-indigo-300 font-medium mt-0.5">
                        {org.organization}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
