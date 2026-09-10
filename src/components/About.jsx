import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Layers,
  Briefcase,
  CheckCircle,
  Cpu,
  Code
} from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "S1 Teknik Informatika",
      subtitle: "Universitas Esa Unggul (2022–2026)",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Award,
      title: "Cumulative GPA",
      value: personal.gpa,
      subtitle: "Scale 4.00",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Briefcase,
      title: "Experience",
      value: "2 Internships",
      subtitle: "Legal Mind & Ciputra IT Support",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Layers,
      title: "Core Expertise",
      value: "Web, Data & Network",
      subtitle: "Laravel, Python & MikroTik",
      color: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Transforming Passion into Functional Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Get to know my academic background, technical journey, and development philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-sm space-y-5">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2.5">
                <Code className="w-5 h-5 text-indigo-400" />
                <span>Web Development, Data Analytics & Networking</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-base">
                I am an <strong className="text-white font-semibold">Informatics Engineering graduate from Universitas Esa Unggul</strong> with multidisciplinary competencies across <strong className="text-indigo-300">Web Development</strong>, <strong className="text-sky-300">Data Analysis</strong>, and <strong className="text-emerald-300">Network Engineering</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                I have hands-on experience developing web applications using PHP and Laravel, conducting time-series predictive modeling using Python & ARIMAX, and managing computer network infrastructure with MikroTik and Cisco Packet Tracer. I enjoy turning complex technical problems into structured, reliable, and clean solutions.
              </p>

              {/* Bullet Highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">Web Dev (Laravel, PHP, React)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">Data Analytics & ARIMAX (Python)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">Network Infra (MikroTik & Cisco)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">Relational Database & MySQL</span>
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
                  className={`p-5 rounded-2xl bg-slate-900/60 border ${item.bg} flex flex-col justify-between space-y-3 hover:scale-[1.02] transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {item.title}
                    </span>
                    <div className={`p-2 rounded-xl bg-slate-950/70 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {item.value}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
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
