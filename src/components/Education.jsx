import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-matrix/10 text-matrix border border-matrix/30 rounded-none">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-matrix font-calibri uppercase">Academic History</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education & <span className="text-matrix font-calibri">Academic Achievements</span>
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl text-sm sm:text-base">
          Consistently striving for academic mastery with a top-tier record in Information Technology.
        </p>

        {/* Education Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {/* Card 1: CUSAT */}
          <div className="glass-card glass-card-hover p-6 sm:p-8 flex flex-col justify-between rounded-none">
            <div className="space-y-4">

              {/* Header pill & dates */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-matrix/20 border border-matrix/40 text-matrix text-xs font-bold font-calibri rounded-none">
                  <Sparkles className="w-3.5 h-3.5 text-matrix" />
                  Undergraduate Degree
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-300 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  2024 – Present
                </span>
              </div>

              {/* Institution & Major */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Cochin University of Science and Technology
                </h3>
                <p className="text-matrix font-calibri font-bold text-sm sm:text-base mt-1">
                  B.Tech in Information Technology
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-matrix" />
                <span>Kochi, Kerala, India</span>
              </div>

              {/* CGPA Box */}
              <div className="p-4 bg-black/70 border border-matrix/30 space-y-2 rounded-none">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Current Cumulative GPA</span>
                  <span className="text-2xl font-extrabold text-matrix font-calibri">10.0 / 10.0</span>
                </div>
                <div className="text-xs text-gray-300">
                  Perfect academic record across all completed terms.
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                  <div className="text-center p-2 bg-black/50 border border-matrix/20 rounded-none">
                    <div className="text-[10px] text-gray-400">Sem 1</div>
                    <div className="text-sm font-bold text-matrix font-calibri">10.0</div>
                  </div>
                  <div className="text-center p-2 bg-black/50 border border-matrix/20 rounded-none">
                    <div className="text-[10px] text-gray-400">Sem 2</div>
                    <div className="text-sm font-bold text-matrix font-calibri">10.0</div>
                  </div>
                  <div className="text-center p-2 bg-black/50 border border-matrix/20 rounded-none">
                    <div className="text-[10px] text-gray-400">Sem 3</div>
                    <div className="text-sm font-bold text-matrix font-calibri">10.0</div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-gray-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-matrix" />
              <span>Focus on Machine Learning, Data Structures, Operating Systems & IoT.</span>
            </div>
          </div>

          {/* Card 2: Don Bosco HS */}
          <div className="glass-card glass-card-hover p-6 sm:p-8 flex flex-col justify-between rounded-none">
            <div className="space-y-4">

              {/* Header pill & dates */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-matrix/20 border border-matrix/40 text-matrix text-xs font-bold font-calibri rounded-none">
                  <Award className="w-3.5 h-3.5 text-matrix" />
                  Higher Secondary Education
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-300 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  Completed 2021
                </span>
              </div>

              {/* Institution & Stream */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Don Bosco Higher Secondary School
                </h3>
                <p className="text-matrix font-calibri font-bold text-sm sm:text-base mt-1">
                  Bio-Maths Stream (Higher Secondary)
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-matrix" />
                <span>Irinjalakuda, Thrissur, Kerala, India</span>
              </div>

              {/* Score Box */}
              <div className="p-4 bg-black/70 border border-matrix/30 space-y-2 rounded-none">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Higher Secondary Result</span>
                  <span className="text-2xl font-extrabold text-matrix font-calibri">99.6%</span>
                </div>
                <div className="text-xs text-gray-300">
                  Outstanding performance in Mathematics, Physics, Chemistry, and Biology.
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-gray-300 flex items-center gap-2">
              <Award className="w-4 h-4 text-matrix" />
              <span>Ranked among top distinction achievers state-wide.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
