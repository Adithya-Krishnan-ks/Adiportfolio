import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 'dayflow',
    title: 'Dayflow HRMS',
    subtitle: 'Full-Stack Human Resource Management System',
    category: 'Full-Stack',
    stack: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    description: 'A comprehensive human resource management platform designed for employee profiles, attendance tracking, leave requests, and payroll workflows.',
    features: [
      'Role-based dashboards for HR admins and employees',
      'Secure authentication & row-level security',
      'Real-time attendance tracking & leave approval pipeline',
      'Automated payroll calculation workflows',
    ],
    github: 'https://github.com/Emilin24/Odoo2025-EliteCoders-Dayflow',
  },
  {
    id: 'unirewards',
    title: 'UniRewards Marketplace',
    subtitle: 'University Points & Auction Bidding Platform',
    category: 'Full-Stack',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Firebase', 'JWT'],
    description: 'An interactive university reward marketplace where students earn, transfer, and redeem achievement points through an auction-based bidding system.',
    features: [
      'Role-based allocation workflows & point distribution',
      'Secure JWT authentication & transactional integrity',
      'Live auction bidding mechanism with auto-fulfillment',
      'PostgreSQL relational schema with audit logs',
    ],
    github: 'https://github.com/Adithya-Krishnan-ks/uniREWARDStm',
  },
  {
    id: 'flood-prediction',
    title: 'Hybrid LSTM Flood Prediction',
    subtitle: 'Edge AI & Time-Series Neural Network',
    category: 'AI & ML',
    stack: ['Python', 'TensorFlow', 'Keras', 'TFLite', 'Pandas'],
    description: 'A hybrid deep learning model combining real-time IoT sensor streams and meteorological features to forecast urban flood occurrences.',
    features: [
      'Sliding-window temporal feature preprocessing',
      'Multi-input LSTM neural network architecture',
      'TensorFlow Lite quantization for microcontroller edge deployment',
      'Integrated with CitySense urban sensor telemetry',
    ],
    github: 'https://github.com/Adithya-Krishnan-ks',
  },
  {
    id: 'smart-hospital',
    title: 'Smart Hospital Queue Manager',
    subtitle: 'Live Doctor Queue & Priority Appointment System',
    category: 'Full-Stack',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
    description: 'A hospital queue and appointment management platform providing live doctor queue tracking and priority-based patient scheduling.',
    features: [
      'OTP-based patient authentication & registration',
      'Real-time digital token tracking & queue updates',
      'Priority-based scheduling algorithms',
      'Dynamic wait-time estimation models',
    ],
    github: 'https://github.com/Adithya-Krishnan-ks/smarthospital',
  },
];

const categories = ['All', 'Full-Stack', 'AI & ML'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-matrix/10 text-matrix border border-matrix/30 rounded-none">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-matrix font-calibri uppercase">Portfolio Showcase</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-matrix font-calibri">Projects</span>
            </h2>
            <p className="text-gray-300 mt-2 max-w-2xl text-sm sm:text-base">
              Showcasing full-stack software architectures, machine learning models, and edge computing solutions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-black/80 border border-matrix/30 self-start rounded-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold font-calibri transition-all rounded-none ${
                  activeCategory === cat
                    ? 'bg-matrix text-slate-950 shadow-md shadow-matrix/20 font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-matrix/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover p-6 sm:p-8 flex flex-col justify-between relative group rounded-none"
            >
              <div className="space-y-4">
                
                {/* Category & Repo Link */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-matrix/20 border border-matrix/40 text-matrix text-xs font-bold font-calibri rounded-none">
                    {project.category}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black/70 hover:bg-black/90 text-gray-200 hover:text-matrix border border-matrix/30 text-xs font-medium font-calibri transition-all rounded-none"
                  >
                    <Github className="w-3.5 h-3.5 text-matrix" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-matrix font-calibri transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-matrix font-mono font-bold mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-200 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Key Features</div>
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-matrix shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Tech Badges Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-black/70 border border-matrix/30 text-matrix text-xs font-mono font-bold rounded-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
