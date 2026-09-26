import React from 'react';
import { User, Cpu, Activity, Lightbulb, CheckCircle2, Binary, Network, Sparkles } from 'lucide-react';

const researchTopics = [
  { title: 'Incremental Concept Drift Detection', desc: 'Analyzing evolving stream data without computationally expensive full retraining.', icon: Binary },
  { title: 'Noise-Resistant Data Stream Analysis', desc: 'Designing stream mining models resilient to measurement noise and data stream anomalies.', icon: Activity },
  { title: 'Intelligent Predictive Systems', desc: 'Fusing time-series telemetry and meteorological inputs for accurate flood and environmental forecasting.', icon: Cpu },
  { title: 'Smart City Edge Analytics', desc: 'Deploying optimized neural network models (TFLite) onto edge microcontroller platforms.', icon: Network },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-matrix/10 text-matrix border border-matrix/30 rounded-none">
            <User className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-matrix font-calibri uppercase">Background & Focus</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="text-matrix font-calibri">Adithya Krishnan</span>
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl text-sm sm:text-base">
          Bridging theoretical machine learning research with practical full-stack software and smart IoT engineering.
        </p>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 space-y-5 rounded-none">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-matrix" />
                Academic & Entrepreneurial Journey
              </h3>

              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                I am an Information Technology undergraduate at <strong className="text-white">Cochin University of Science and Technology (CUSAT)</strong>, maintaining a perfect academic record of <span className="text-matrix font-calibri font-bold text-base">10.0 / 10.0 CGPA</span> across all completed semesters.
              </p>

              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                My research focuses on <strong className="text-matrix font-calibri font-semibold">incremental concept drift detection</strong>, <strong className="text-matrix font-calibri font-semibold">noise-resistant data stream analysis</strong>, and <strong className="text-matrix font-calibri font-semibold">intelligent predictive systems</strong>. Through research internships at <strong className="text-white">IIIT Kottayam</strong> and training with <strong className="text-white">MathWorks</strong>, I have worked on stream algorithms, MATLAB modeling, and hybrid neural networks.
              </p>

              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                As <strong className="text-white">Managing Partner</strong> at <span className="text-matrix font-calibri font-bold">CitySense Urban Intelligence</span>, I lead IoT development for smart-city flood detection and urban monitoring — rebuilding patented hardware sensor networks funded by <span className="text-matrix font-calibri font-semibold">RUSA</span> and approved by the <span className="text-matrix font-calibri font-semibold">Kochi Municipality</span>.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-matrix shrink-0" />
                  <span>10.0 CGPA Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-matrix shrink-0" />
                  <span>IIIT Kottayam AI Research Intern</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-matrix shrink-0" />
                  <span>MathWorks Computational Thinking</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-matrix shrink-0" />
                  <span>IoT Startup Founder (RUSA Funded)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Focus Grid Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-matrix" />
              Primary Research Interests
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {researchTopics.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card glass-card-hover p-5 group rounded-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-matrix/10 border border-matrix/30 text-matrix group-hover:bg-matrix/20 transition-colors shrink-0 rounded-none">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm sm:text-base group-hover:text-matrix font-calibri transition-colors">
                          {topic.title}
                        </h4>
                        <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                          {topic.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
