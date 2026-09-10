import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero onDownloadCV={() => setIsCVOpen(true)} />

        {/* About Section */}
        <About />

        {/* Skills & Tech Stack */}
        <Skills />

        {/* Projects Showcase (5 Projects with Details Modal) */}
        <Projects />

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
