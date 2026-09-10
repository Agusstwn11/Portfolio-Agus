import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, FileText, Download, Building2, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold text-white">Sertifikat Magang Resmi Terverifikasi</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Visual Certificate Preview (Image or PDF Viewer) */}
          {cert.image ? (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-lg">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain max-h-[380px] mx-auto"
              />
            </div>
          ) : (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-lg">
              <iframe
                src={cert.file}
                title={cert.title}
                className="w-full h-[380px] bg-slate-900"
              />
            </div>
          )}

          {/* Certificate Metadata Details */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Certificate</span>
              </span>
              {cert.credentialNo && (
                <span className="text-xs text-slate-400 font-mono">
                  No: {cert.credentialNo}
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">
              {cert.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Penerbit:</span>
                  <span className="font-medium text-white">{cert.issuer}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Periode Praktik:</span>
                  <span className="font-medium text-white">{cert.period}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Tutup
          </button>

          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs font-medium shadow-md shadow-indigo-600/20 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Buka Dokumen PDF Penuh</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
