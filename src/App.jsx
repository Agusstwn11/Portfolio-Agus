import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased transition-colors duration-300">
      
      {/* Sticky Navigation Bar with Theme Switcher */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <Hero onDownloadCV={() => setIsCVOpen(true)} />

        {/* About Section */}
        <About />

        {/* Skills & Tech Stack */}
        <Skills />

        {/* Projects Showcase (Real Images, Modals, Reports & Galleries) */}
        <Projects />

        {/* Official Certifications & Competencies Showcase */}
        <Certifications />

        {/* Work Experience & Leadership / Organizations */}
        <Experience />

        {/* Education (Universitas Esa Unggul) */}
        <Education />

        {/* Contact (LinkedIn, GitHub, Gmail, WhatsApp, Instagram) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
