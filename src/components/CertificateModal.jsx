import React, { useEffect, useState } from 'react';
import { X, Award, CheckCircle2, FileText, Download, Building2, Calendar, ExternalLink, ShieldCheck, Layers, FileCheck } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  const [activeSide, setActiveSide] = useState('front'); // 'front' | 'back'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveSide('front');
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const currentImage = activeSide === 'back' && cert.backImage ? cert.backImage : (cert.image || cert.file);
  const isPdf = typeof cert.file === 'string' && cert.file.toLowerCase().endsWith('.pdf') && !cert.image;

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
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">Dokumen Sertifikasi Resmi</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2">Terverifikasi & Sah</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Side Switcher if there is a back image (e.g. BNSP Unit or Nilai) */}
          {cert.backImage && (
            <div className="flex items-center justify-center gap-2 pb-1">
              <button
                onClick={() => setActiveSide('front')}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeSide === 'front'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Halaman Depan
              </button>
              <button
                onClick={() => setActiveSide('back')}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeSide === 'back'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cert.id === 'cert-bnsp-tkj' ? 'Daftar 13 Unit Kompetensi' : 'Daftar Nilai'}
              </button>
            </div>
          )}

          {/* Visual Certificate Preview */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-lg">
            {!isPdf ? (
              <img
                src={currentImage}
                alt={cert.title}
                className="w-full h-auto object-contain max-h-[440px] mx-auto bg-slate-900"
              />
            ) : (
              <iframe
                src={cert.file}
                title={cert.title}
                className="w-full h-[440px] bg-slate-900"
              />
            )}
          </div>

          {/* Certificate Metadata Details */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{cert.status || 'Verified Certificate'}</span>
              </span>
              {cert.credentialNo && (
                <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                  No. Sertifikat: <strong className="text-slate-900 dark:text-slate-200">{cert.credentialNo}</strong>
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              {cert.title}
            </h3>

            {cert.description && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {cert.description}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Penerbit & Lembaga:</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{cert.issuer} {cert.institution ? `(${cert.institution})` : ''}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-500 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Tanggal / Masa Berlaku:</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{cert.date || cert.period}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>

          <a
            href={cert.file || cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Buka Dokumen Penuh</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
