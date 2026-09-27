import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  ExternalLink,
  Eye,
  FileCheck2,
  Sparkles,
  Search
} from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ['All', 'Publikasi & Jurnal', 'Nasional & BNSP', 'Data & BI', 'IT Productivity', 'Pengalaman Kerja', 'Kepemimpinan & Organisasi'];

  const filteredCerts =
    activeCategory === 'All'
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative bg-white dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Official Credentials & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Sertifikasi Profesi & Lisensi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Sertifikasi kompetensi nasional standar BNSP, spesialisasi Microsoft & Simplilearn, sertifikat magang industri, dan lisensi resmi lainnya dengan nomor kredensial yang dapat diverifikasi.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-amber-400 dark:hover:border-slate-700 transition-all glow-card group"
            >
              {/* Card Banner / Thumbnail */}
              <div
                className="relative h-44 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950/40 to-slate-900/60 p-4 text-center">
                    <ShieldCheck className="w-12 h-12 text-indigo-400 mb-2" />
                    <span className="text-xs font-semibold text-slate-300">{cert.issuer}</span>
                    <span className="text-[11px] text-slate-500 mt-1 font-mono">Dokumen Digital PDF</span>
                  </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-950/85 backdrop-blur-sm text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    {cert.badge}
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-950/85 backdrop-blur-sm text-slate-300">
                  {cert.date}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                    {cert.issuer} {cert.institution ? `• ${cert.institution}` : ''}
                  </div>

                  <h3
                    onClick={() => setSelectedCert(cert)}
                    className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-2"
                  >
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Credential Number & Verification */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-1.5">
                  {cert.credentialNo && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                      No. Reg / Kredensial: <span className="font-semibold text-slate-700 dark:text-slate-200">{cert.credentialNo}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 py-4 bg-white dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Dokumen Asli</span>
                </button>

                <div className="flex items-center gap-2">
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-[11px] font-semibold transition-colors"
                    >
                      <span>Web Jurnal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={cert.url || cert.file || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="Buka tab baru"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
