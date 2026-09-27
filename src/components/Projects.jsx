import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowUpRight,
  FileText,
  FileCheck2,
  Image as ImageIcon
} from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Development', 'QA & Testing', 'Network Engineering', 'Data Science', 'Mobile'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Works & Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Practical Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Kumpulan proyek nyata: sistem presensi magang Legal Mind, pengujian otomatis Jest SQA, arsitektur jaringan Cisco Packet Tracer, pipeline ETL & Power BI, dan aplikasi mobile.
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
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-indigo-400 dark:hover:border-slate-700 transition-all glow-card group"
            >
              {/* Card Image Banner */}
              <div
                className="relative h-48 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : project.journalUrl ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 p-5 text-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-1.5 shadow-md">
                      <FileText className="w-7 h-7 text-sky-400" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wider">JURNAL ILMIAH TERAKREDITASI</span>
                    <span className="text-[11px] text-indigo-300 font-mono mt-0.5">CoSciTech Vol. 7 No. 2 (2026)</span>
                    <span className="text-[10px] text-slate-400 font-mono mt-0.5">DOI: 10.37859/coscitech.v7i2.12159</span>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900/20 to-slate-900/40 p-4 text-center">
                    <FolderGit2 className="w-12 h-12 text-indigo-400/60 mb-2" />
                    <span className="text-xs text-slate-400 font-mono">{project.tag}</span>
                  </div>
                )}

                {/* Overlay Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-950/80 backdrop-blur-sm text-indigo-300 border border-indigo-500/30">
                    {project.category}
                  </span>
                  {project.journalUrl && (
                    <span className="px-2 py-1 rounded-lg text-[10px] font-semibold bg-indigo-600 text-white flex items-center gap-1 shadow">
                      <Sparkles className="w-3 h-3" />
                      Jurnal CoSciTech
                    </span>
                  )}
                  {project.reportPdf && (
                    <span className="px-2 py-1 rounded-lg text-[10px] font-semibold bg-amber-500/90 text-slate-950 flex items-center gap-1 shadow">
                      <FileText className="w-3 h-3" />
                      PDF Report
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950/80 backdrop-blur-sm text-slate-300">
                  {project.tag}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors cursor-pointer line-clamp-1"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-950/60 text-slate-500 dark:text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/btn"
                >
                  <span>Detail & Bukti</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.journalUrl && (
                    <a
                      href={project.journalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
                      title="Buka Jurnal Online (CoSciTech)"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.reportPdf && (
                    <a
                      href={project.reportPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors"
                      title={project.journalUrl ? "Buka Jurnal PDF" : "Lihat Laporan PDF"}
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  )}

                  {project.github && !project.journalUrl && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demo && !project.journalUrl && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
                      title="Demo / Drive Video"
                      aria-label="Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detail view */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
