import React from 'react';
import { Code2, Cpu, Layout, Server, Database, Wrench, Brain, Check } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C++', 'Java', 'JavaScript (ES6+)', 'Python'],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: ['Incremental Concept Drift', 'Feature Engineering', 'Data Preprocessing', 'Model Evaluation & Stream Metrics'],
  },
  {
    title: 'ML Frameworks & Libraries',
    icon: Cpu,
    skills: ['TensorFlow', 'Keras', 'Pandas', 'Scikit-learn', 'NumPy'],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Flask', 'PHP', 'REST APIs'],
  },
  {
    title: 'Databases & Cloud',
    icon: Database,
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'SQL', 'Firebase'],
  },
  {
    title: 'Tools & Hardware IoT',
    icon: Wrench,
    skills: ['Git & GitHub', 'MATLAB', 'Simulink', 'Arduino', 'NodeMCU', 'Sensors Telemetry'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-matrix/10 text-matrix border border-matrix/30 rounded-none">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-matrix font-calibri uppercase">Proficiencies</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical <span className="text-matrix font-calibri">Skills</span>
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl text-sm sm:text-base">
          A broad technical toolkit spanning artificial intelligence algorithms, full-stack frameworks, database engineering, and hardware prototyping.
        </p>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 space-y-4 rounded-none"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-matrix/10 border border-matrix/30 text-matrix rounded-none">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 border border-matrix/30 text-gray-200 text-xs font-mono font-medium hover:border-matrix hover:text-matrix transition-colors rounded-none"
                    >
                      <Check className="w-3 h-3 text-matrix shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
