import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-black/90 backdrop-blur-xl border-t border-matrix/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="w-8 h-8 bg-matrix flex items-center justify-center text-slate-950 font-black text-sm rounded-none">
                AK
              </span>
              <span className="font-calibri">Adithya Krishnan K S</span>
            </a>
            <p className="text-xs text-gray-300">
              AI/ML Researcher • Full-Stack Developer • IoT Entrepreneur
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 font-calibri text-sm">
            <a href="#about" className="hover:text-matrix transition-colors">About</a>
            <a href="#education" className="hover:text-matrix transition-colors">Education</a>
            <a href="#experience" className="hover:text-matrix transition-colors">Experience</a>
            <a href="#projects" className="hover:text-matrix transition-colors">Projects</a>
            <a href="#skills" className="hover:text-matrix transition-colors">Skills</a>
            <a href="#contact" className="hover:text-matrix transition-colors">Contact</a>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Adithya-Krishnan-ks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-black/70 border border-matrix/30 text-gray-300 hover:text-matrix hover:border-matrix transition-all rounded-none"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/adithya-krishnan-ks-7a8bb0329"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-black/70 border border-matrix/30 text-gray-300 hover:text-matrix hover:border-matrix transition-all rounded-none"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:adithyak847@gmail.com"
              className="p-2.5 bg-black/70 border border-matrix/30 text-gray-300 hover:text-matrix hover:border-matrix transition-all rounded-none"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-matrix/20 text-matrix border border-matrix/40 hover:bg-matrix/30 transition-all rounded-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} Adithya Krishnan K S. All rights reserved.
          </div>
          <div className="font-calibri">
            Built with Absolute love and sleepless nights
          </div>
        </div>

      </div>
    </footer>
  );
}
