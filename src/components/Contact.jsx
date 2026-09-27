import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Copy,
  Check,
  Send,
  ExternalLink,
  Phone
} from 'lucide-react';

export default function Contact() {
  const { socialLinks, personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const encodedText = encodeURIComponent(
      `Halo Agus Setiawan, perkenalkan nama saya ${name || 'Pengunjung Website'}.\n\nPesan: ${message}`
    );
    window.open(`https://wa.me/6281212635065?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hubungi & Terhubung
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Terbuka untuk peluang kerja full-time, kontrak, maupun diskusi proyek web, data, dan sistem jaringan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Kontak Langsung
            </h3>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">WhatsApp / Telepon</span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
                    {socialLinks.whatsapp}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(socialLinks.whatsapp, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  title="Salin Nomor"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={socialLinks.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 transition-all"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Email / Gmail Card */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-red-500/40 transition-all flex items-center justify-between group shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="max-w-[170px] sm:max-w-none truncate">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Email Utama</span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono truncate">
                    {socialLinks.gmail}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(socialLinks.gmail, 'email')}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  title="Salin Email"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${socialLinks.gmail}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all"
                >
                  <span>Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Grid (LinkedIn, GitHub, Instagram) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 flex flex-col items-center text-center gap-2 group transition-all shadow-sm"
              >
                <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">LinkedIn</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">agussetiawan11</span>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-400 flex flex-col items-center text-center gap-2 group transition-all shadow-sm"
              >
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">GitHub</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Agusstwn11</span>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-pink-500/40 flex flex-col items-center text-center gap-2 group transition-all shadow-sm"
              >
                <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Instagram</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">@a.stwn11</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl backdrop-blur-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Kirim Pesan Cepat
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Tulis pesan Anda dan langsung teruskan via WhatsApp untuk respon cepat.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Nama / Perusahaan
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: HR PT Tech / John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Halo Agus, kami tertarik dengan portfolio dan kualifikasi Anda untuk posisi..."
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-indigo-600/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan ke WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
