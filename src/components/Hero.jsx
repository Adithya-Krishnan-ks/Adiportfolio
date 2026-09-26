import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Github, Linkedin, Sparkles, Award, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Card Container — Sharp Frosted Panel with Glow */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 glass-card p-6 sm:p-10 rounded-none">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-matrix/10 border border-matrix/30 text-matrix text-xs font-semibold font-calibri tracking-wide rounded-none glow-pill hover:bg-matrix/20">
                <Sparkles className="w-3.5 h-3.5 text-matrix" />
                Available for AI Research & Software Dev
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-matrix/20 border border-matrix/40 text-white text-xs font-bold font-calibri rounded-none glow-pill hover:border-matrix">
                <Award className="w-3.5 h-3.5 text-matrix" />
                10.0 CGPA @ CUSAT
              </span>
            </div>

            {/* Title & Roles */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-matrix font-calibri font-bold drop-shadow-[0_0_12px_rgba(0,204,68,0.7)]">Adithya Krishnan K S</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-200 flex flex-wrap items-center gap-2">
                <span className="text-matrix font-calibri font-bold drop-shadow-[0_0_8px_rgba(0,204,68,0.6)]">AI/ML Researcher</span>
                <span className="text-gray-500">•</span>
                <span className="text-white font-semibold">Full-Stack Developer</span>
                <span className="text-gray-500">•</span>
                <span className="text-matrix font-calibri font-semibold drop-shadow-[0_0_8px_rgba(0,204,68,0.6)]">IoT Entrepreneur</span>
              </p>
            </div>

            {/* Biography text */}
            <p className="text-gray-300 text-base leading-relaxed">
              B.Tech Information Technology student at Cochin University of Science and Technology (CUSAT).
              Focused on developing intelligent systems, conducting research in noise-resistant machine learning algorithms,
              and engineering scalable full-stack & IoT smart-city solutions.
            </p>

            {/* Core Domain Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['AI / ML Research', 'Data Stream Analysis', 'Full-Stack Development', 'IoT & Smart Cities'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-black/70 border border-matrix/30 text-matrix font-calibri text-xs font-semibold rounded-none glow-pill hover:bg-matrix/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-matrix hover:bg-matrix-light text-slate-950 font-bold font-calibri text-sm shadow-[0_0_20px_rgba(0,204,68,0.5)] hover:shadow-[0_0_30px_rgba(0,204,68,0.8)] transition-all rounded-none"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/70 hover:bg-matrix hover:text-slate-950 text-white font-semibold text-sm border border-matrix/40 transition-all rounded-none hover:shadow-[0_0_25px_rgba(0,204,68,0.6)]"
              >
                <Download className="w-4 h-4 text-matrix group-hover:text-slate-950" />
                Download Resume
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-matrix/10 hover:bg-matrix/20 text-matrix border border-matrix/30 text-sm font-semibold font-calibri transition-all rounded-none hover:shadow-[0_0_20px_rgba(0,204,68,0.5)]"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            {/* Location & Social Icons Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 w-full text-sm text-gray-300">
              <div className="flex items-center gap-2 text-gray-200">
                <MapPin className="w-4 h-4 text-matrix drop-shadow-[0_0_8px_#00cc44]" />
                <span>Thrissur, Kerala, India</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Adithya-Krishnan-ks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-black/70 border border-matrix/30 text-gray-300 hover:text-matrix hover:border-matrix hover:shadow-[0_0_20px_rgba(0,204,68,0.6)] transition-all rounded-none"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/adithya-krishnan-ks-7a8bb0329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-black/70 border border-matrix/30 text-gray-300 hover:text-matrix hover:border-matrix hover:shadow-[0_0_20px_rgba(0,204,68,0.6)] transition-all rounded-none"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="mailto:adithyak847@gmail.com"
                  className="p-2.5 bg-black/70 border border-matrix/30 text-gray-300 hover:text-matrix hover:border-matrix hover:shadow-[0_0_20px_rgba(0,204,68,0.6)] transition-all rounded-none"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-card p-6 sm:p-8 space-y-6 rounded-none">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-14 h-14 bg-matrix flex items-center justify-center text-slate-950 font-black text-2xl shadow-[0_0_20px_rgba(0,204,68,0.6)] rounded-none">
                      AK
                    </div>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-matrix border-2 border-black rounded-none shadow-[0_0_8px_#00cc44]"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Adithya Krishnan K S</h3>
                    <p className="text-xs text-matrix font-mono font-bold drop-shadow-[0_0_8px_#00cc44]">B.Tech IT Candidate</p>
                  </div>
                </div>
                <Cpu className="w-6 h-6 text-matrix drop-shadow-[0_0_10px_#00cc44]" />
              </div>

              {/* Highlights Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-black/70 border border-matrix/30 rounded-none hover:border-matrix hover:shadow-[0_0_15px_rgba(0,204,68,0.4)] transition-all">
                  <div className="text-xs text-gray-400 font-medium">Academic Standard</div>
                  <div className="text-2xl font-extrabold text-matrix font-calibri mt-1 drop-shadow-[0_0_10px_rgba(0,204,68,0.7)]">10.0 <span className="text-xs text-gray-400 font-sans">/ 10</span></div>
                  <div className="text-[10px] text-gray-400 mt-0.5">CUSAT CGPA</div>
                </div>

                <div className="p-3.5 bg-black/70 border border-matrix/30 rounded-none hover:border-matrix hover:shadow-[0_0_15px_rgba(0,204,68,0.4)] transition-all">
                  <div className="text-xs text-gray-400 font-medium">Higher Secondary</div>
                  <div className="text-2xl font-extrabold text-matrix font-calibri mt-1 drop-shadow-[0_0_10px_rgba(0,204,68,0.7)]">99.6%</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Bio-Maths Result</div>
                </div>
              </div>

              {/* Key Positions */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Research & Entrepreneurship</div>
                
                <div className="flex items-center justify-between p-3 bg-black/70 border border-matrix/30 rounded-none hover:border-matrix hover:shadow-[0_0_15px_rgba(0,204,68,0.4)] transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-matrix rounded-none shadow-[0_0_6px_#00cc44]"></div>
                    <span className="text-xs text-gray-200 font-medium">IIIT Kottayam</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 bg-matrix/20 text-matrix font-calibri font-bold rounded-none">Research Intern</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-black/70 border border-matrix/30 rounded-none hover:border-matrix hover:shadow-[0_0_15px_rgba(0,204,68,0.4)] transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-matrix rounded-none shadow-[0_0_6px_#00cc44]"></div>
                    <span className="text-xs text-gray-200 font-medium">MathWorks</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 bg-matrix/20 text-matrix font-calibri font-bold rounded-none">AI & Simulink</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-black/70 border border-matrix/30 rounded-none hover:border-matrix hover:shadow-[0_0_15px_rgba(0,204,68,0.4)] transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-matrix rounded-none shadow-[0_0_6px_#00cc44]"></div>
                    <span className="text-xs text-gray-200 font-medium">CitySense Urban Intel</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 bg-matrix/20 text-matrix font-calibri font-bold rounded-none">Managing Partner</span>
                </div>
              </div>

              {/* Funding Badge */}
              <div className="flex items-center justify-center gap-2 py-2.5 px-3 bg-matrix/10 border border-matrix/40 text-matrix text-xs font-bold font-calibri rounded-none hover:shadow-[0_0_20px_rgba(0,204,68,0.5)] transition-all">
                <ShieldCheck className="w-4 h-4 text-matrix shrink-0" />
                <span>RUSA Funded & Kochi Municipality Approved</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
