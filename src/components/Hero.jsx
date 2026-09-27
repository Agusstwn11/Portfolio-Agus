import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileText,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Terminal,
  Sparkles,
  CheckCircle2,
  Camera,
  Code2,
  Award,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ onDownloadCV }) {
  const { personal, socialLinks } = portfolioData;
  const [activeRightTab, setActiveRightTab] = useState('photo'); // 'photo' | 'code'

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/15 via-sky-500/15 to-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e115_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e115_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Profile Photo Avatar + Name Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              
              {/* Photo Avatar Thumbnail */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 border-2 border-indigo-400/50 shadow-xl">
                  <img
                    src={personal.photo || '/agus-photo.jpg'}
                    alt="Foto Profil Agus Setiawan"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/agus-photo.svg';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    title="Ganti foto profil"
                    className="absolute bottom-1 right-1 p-1 bg-slate-950/80 rounded-md text-slate-400 hover:text-white transition-colors"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Headline & Role */}
              <div className="space-y-2 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-500 dark:from-indigo-400 dark:via-sky-400 dark:to-teal-300 bg-clip-text text-transparent">
                    {personal.name}
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-300/90 font-mono">
                  {personal.role}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                    Universitas Esa Unggul
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-bold">
                    IPK: {personal.gpa}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    BNSP Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Intro and Tagline */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {personal.shortIntro}
              </p>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 text-sm italic flex items-center gap-3 shadow-sm">
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>"{personal.tagline}"</span>
              </div>
            </div>

            {/* Call-To-Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onDownloadCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <span>Lihat Proyek ({portfolioData.projects.length})</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#certifications"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-semibold text-sm hover:bg-amber-500/20 transition-all shadow-sm"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Sertifikasi Resmi</span>
              </a>
            </div>

            {/* Key Metrics Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">3.43</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">IPK S1 Informatika</div>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400 font-mono">7+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Proyek Rekayasa</div>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Jest QA Pass Rate</div>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">7</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Lisensi & Sertifikat</div>
              </div>
            </div>

            {/* Quick Social Badges */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${socialLinks.gmail}`}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right / Visual Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative rounded-3xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl backdrop-blur-xl space-y-4">
                
                {/* Switcher Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => setActiveRightTab('photo')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                        activeRightTab === 'photo'
                          ? 'bg-indigo-600 text-white shadow'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Profil Utama
                    </button>
                    <button
                      onClick={() => setActiveRightTab('code')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                        activeRightTab === 'code'
                          ? 'bg-indigo-600 text-white shadow'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Developer Bio
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                    <span>agus.dev</span>
                  </div>
                </div>

                {/* Tab 1: Photo Portrait Showcase */}
                {activeRightTab === 'photo' ? (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-200 dark:border-slate-800 group/img">
                      <img
                        src={personal.photo || '/agus-photo.jpg'}
                        alt="Agus Setiawan"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/agus-photo.svg';
                        }}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold text-sm">{personal.name}</p>
                          <p className="text-indigo-300 text-xs font-mono">{personal.role.split('|')[0].trim()}</p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Active & Ready
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90">
                        <div className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                          <Award className="w-3.5 h-3.5" />
                          <span>Magang Industri</span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Legal Mind & Ciputra</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90">
                        <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-semibold mb-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>BNSP TKJ</span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">13 Unit Kompeten</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Tab 2: Code Window */
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="font-mono text-xs leading-relaxed space-y-1.5 text-slate-300 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                      <p className="text-slate-400">
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-sky-300">agusSetiawan</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">degree:</span>{' '}
                        <span className="text-emerald-300">"S1 Teknik Informatika"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">gpa:</span>{' '}
                        <span className="text-amber-300">{personal.gpa}</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">competencies:</span> [
                        <span className="text-emerald-300">"Web Dev"</span>,{' '}
                        <span className="text-emerald-300">"Data/BI"</span>,{' '}
                        <span className="text-emerald-300">"Networking"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">certifications:</span>{' '}
                        <span className="text-emerald-300">"BNSP, Microsoft, Simplilearn"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">status:</span>{' '}
                        <span className="text-sky-300">"Open to Work"</span>,
                      </p>
                      <p className="text-slate-400">&#125;;</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
                      <span>Laravel • Jest SQA • Cisco MLS • Power BI</span>
                      <Code2 className="w-4 h-4 text-indigo-500" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
