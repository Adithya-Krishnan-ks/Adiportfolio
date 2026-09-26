import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const certs = [
  {
    title: 'Complete Full Stack Web Development Bootcamp',
    organization: 'Udemy',
    description: 'Comprehensive bootcamp covering frontend React, backend Node.js, RESTful APIs, database design, and cloud deployment.',
    icon: Award,
  },
  {
    title: 'Getting Started with Generative AI',
    organization: 'IBM SkillsBuild',
    description: 'Foundational certification on generative AI architecture, large language models, prompt engineering, and ethical AI implementation.',
    icon: Sparkles,
  },
  {
    title: 'Data Science and Analytics',
    organization: 'HP LIFE',
    description: 'Practical training on statistical data analysis, predictive data modeling, visualization, and decision analytics.',
    icon: ShieldCheck,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-matrix/10 text-matrix border border-matrix/30 rounded-none">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-matrix font-calibri uppercase">Verification</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional <span className="text-matrix font-calibri">Certifications</span>
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl text-sm sm:text-base">
          Industry-recognized certifications validating expertise in web development, generative AI, and data analytics.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between space-y-4 relative rounded-none"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-matrix/20 border border-matrix/40 text-matrix text-xs font-bold font-calibri rounded-none">
                      {cert.organization}
                    </span>
                    <Icon className="w-5 h-5 text-matrix" />
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5 text-matrix font-calibri font-bold">
                    <CheckCircle2 className="w-4 h-4 text-matrix" />
                    Verified Credential
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
