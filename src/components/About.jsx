import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Layers,
  Briefcase,
  CheckCircle,
  Cpu,
  Code,
  ShieldCheck
} from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: GraduationCap,
      title: "Pendidikan",
      value: "S1 Teknik Informatika",
      subtitle: "Universitas Esa Unggul (2022–2026)",
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50/70 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20",
    },
    {
      icon: Award,
      title: "IPK Kumulatif",
      value: personal.gpa,
      subtitle: "Skala 4.00 (Sangat Memuaskan)",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50/70 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Sertifikasi",
      value: "BNSP & Microsoft",
      subtitle: "Level II TKJ & Power BI Simplilearn",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50/70 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
    },
    {
      icon: Briefcase,
      title: "Pengalaman",
      value: "2 Magang Industri",
      subtitle: "Legal Mind & Ciputra IT Support",
      color: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-50/70 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-white dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Transforming Passion into Functional Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Latar belakang akademis, keahlian multidisiplin, dan dedikasi pada rekayasa teknologi berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl backdrop-blur-sm space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Code className="w-5 h-5 text-indigo-500" />
                <span>Web Development, Data Analytics, BI & Networking</span>
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Saya adalah lulusan <strong className="text-slate-900 dark:text-white font-semibold">S1 Teknik Informatika dari Universitas Esa Unggul</strong> dengan kompetensi teruji di tiga pilar teknologi utama: <strong className="text-indigo-600 dark:text-indigo-300 font-semibold">Web Development</strong>, <strong className="text-sky-600 dark:text-sky-300 font-semibold">Data Analytics & Business Intelligence</strong>, dan <strong className="text-emerald-600 dark:text-emerald-300 font-semibold">Network Engineering</strong>.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Saya memiliki pengalaman praktis membangun web presensi berbasis PHP Laravel di Legal Mind, merancang pipeline ETL Pentaho & Dashboard Power BI, melaksanakan Software Quality Assurance berbasis pengujian otomatis Jest (100% PASS), serta merancang arsitektur jaringan Cisco skala rumah sakit (MLS, EIGRP, VLAN, Firewall ASA) dengan lisensi resmi negara dari BNSP.
              </p>

              {/* Bullet Highlights */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Web Fullstack (Laravel, PHP, React)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Data Pipeline ETL & Power BI</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Network Architecture (Cisco MLS & ASA)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Automated QA Testing (Jest Framework)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Stats & Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-5 rounded-3xl border ${item.bg} flex flex-col justify-between space-y-3 hover:scale-[1.02] transition-all shadow-sm`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {item.title}
                    </span>
                    <div className={`p-2 rounded-2xl bg-white dark:bg-slate-950/80 shadow-sm ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.value}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
