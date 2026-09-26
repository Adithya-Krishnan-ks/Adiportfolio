import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import bgCyberTunnel from './assets/bg-cyber-tunnel.jpg';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen text-slate-100 relative font-sans selection:bg-matrix/30 selection:text-matrix">
      
      {/* Full-Screen Fixed Background Image (Cyber Tunnel) with Dark Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-20 scale-105"
        style={{ backgroundImage: `url(${bgCyberTunnel})` }}
      ></div>
      {/* Dark overlay for contrast and text readability */}
      <div className="fixed inset-0 bg-black/65 backdrop-brightness-90 -z-10"></div>

      {/* Navigation Header */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
