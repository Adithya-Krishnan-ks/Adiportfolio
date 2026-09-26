import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Award, Briefcase, GraduationCap, FolderGit2, Mail, User, FileText } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-matrix/30 py-3 shadow-2xl shadow-black/80'
        : 'bg-black/60 backdrop-blur-md py-4 border-b border-white/10'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-white group"
          >
            <span className="w-9 h-9 bg-matrix flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-matrix/30 group-hover:scale-105 transition-transform rounded-none">
              AK
            </span>
            <span className="group-hover:text-matrix transition-colors">
              Adithya <span className="text-matrix font-calibri font-bold">Krishnan</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/80 p-1.5 border border-matrix/30 backdrop-blur-md rounded-none">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-none ${isActive
                    ? 'bg-matrix/20 text-matrix border border-matrix/40 font-bold font-calibri shadow-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-matrix/10 hover:bg-matrix/20 text-matrix border border-matrix/30 text-xs font-semibold font-calibri tracking-wide transition-all rounded-none"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-black/80 border border-matrix/30 text-gray-200 hover:text-white focus:outline-none rounded-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-black/95 border border-matrix/30 backdrop-blur-2xl shadow-2xl rounded-none">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-200 hover:text-matrix hover:bg-matrix/10 transition-colors rounded-none"
                  >
                    <Icon className="w-4 h-4 text-matrix" />
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/10 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-matrix hover:bg-matrix-light text-slate-950 text-sm font-bold font-calibri shadow-lg shadow-matrix/25 rounded-none"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
