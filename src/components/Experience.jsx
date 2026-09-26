import React from 'react';
import { Briefcase, Calendar, MapPin, Cpu, ShieldCheck, Binary, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    id: 'iiit-kottayam',
    role: 'Research Intern',
    organization: 'Indian Institute of Information Technology (IIIT), Kottayam',
    period: 'June 2026',
    type: 'Research Internship',
    location: 'Kottayam, Kerala, India',
    icon: Binary,
    summary: 'Focused on incremental concept drift detection and noise-resistant data stream analysis.',
    highlights: [
      'Implemented NR-EIDDM and DenStream-based drift detection approaches using Python stream processing tools.',
      'Evaluated algorithm performance quantitatively using Precision, Recall, F1-score, and Detection Delay metrics.',
      'Investigated mathematical techniques for stream noise filtering and real-time adaptive drift adaptation.',
    ],
    tech: ['Python', 'Data Streams', 'Concept Drift', 'NR-EIDDM', 'DenStream', 'Machine Learning'],
  },
  {
    id: 'mathworks',
    role: 'Computational Thinking & AI Intern',
    organization: 'MathWorks',
    period: 'June 2025',
    type: 'AI Internship (Remote)',
    location: 'Remote',
    icon: Cpu,
    summary: 'Applied computational thinking and artificial intelligence workflows using MATLAB and Simulink.',
    highlights: [
      'Developed predictive and algorithmic models leveraging machine learning techniques and mathematical optimization.',
      'Modeled, simulated, and validated complex dynamic systems using Simulink control environments.',
      'Explored automated AI workflow deployment pipelines and parameter tuning techniques.',
    ],
    tech: ['MATLAB', 'Simulink', 'Computational AI', 'Optimization Models', 'System Dynamics'],
  },
  {
    id: 'citysense',
    role: 'Managing Partner & Founder',
    organization: 'CitySense Urban Intelligence',
    period: '2025 – Present',
    type: 'IoT Startup Entrepreneurship',
    location: 'Kochi & Thrissur, Kerala',
    icon: ShieldCheck,
    summary: 'Leading an IoT-based urban intelligence startup focused on flood detection, mosquito surveillance, and smart-city analytics.',
    highlights: [
      'Rebuilt a patented flood detector prototype integrating sensor network telemetry with real-time data analytics.',
      'Contributed to AI-driven rainfall prediction algorithms and automated emergency notification systems.',
      'Secured RUSA project funding and official project approval from the Kochi Municipality.',
    ],
    tech: ['IoT Sensor Networks', 'Arduino', 'NodeMCU', 'Python AI', 'RUSA Funded', 'Kochi Municipality'],
    fundingBadge: 'RUSA Funded & Kochi Municipality Approved',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-matrix/10 text-matrix border border-matrix/30 rounded-none">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-matrix font-calibri uppercase">Work & Research</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional <span className="text-matrix font-calibri">Experience</span>
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl text-sm sm:text-base">
          Research internships, AI engineering, and IoT startup venture leadership.
        </p>

        {/* Timeline Layout */}
        <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-matrix/30">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row items-center justify-between group"
              >
                {/* Center Timeline Node Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 bg-black border-2 border-matrix flex items-center justify-center text-matrix shadow-lg shadow-matrix/20 z-10 rounded-none">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left / Right Card Container */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'
                  }`}
                >
                  <div className="glass-card glass-card-hover p-6 sm:p-7 space-y-4 rounded-none">
                    
                    {/* Role & Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 bg-matrix/20 border border-matrix/40 text-matrix text-xs font-bold font-calibri rounded-none">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-gray-300">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-matrix font-calibri transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-matrix font-calibri font-bold text-sm mt-0.5">
                        {exp.organization}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-matrix" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-200 text-sm leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-2 pt-2 border-t border-white/10">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-matrix shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Special Funding Badge if applicable */}
                    {exp.fundingBadge && (
                      <div className="p-2.5 bg-matrix/15 border border-matrix/40 text-matrix text-xs font-bold font-calibri flex items-center gap-2 rounded-none">
                        <ShieldCheck className="w-4 h-4 text-matrix shrink-0" />
                        <span>{exp.fundingBadge}</span>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-black/70 border border-matrix/30 text-matrix text-[11px] font-mono font-bold rounded-none"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
