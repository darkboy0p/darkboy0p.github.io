import React from 'react';
import { Download, Code2, Palette, Zap } from 'lucide-react';
import { personalInfo, skills, bio } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Zap: Zap,
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-slate-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A bit about my journey and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-slate max-w-none">
              {bio.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href={personalInfo.resumeLink}
              download
              className="inline-flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Image & Skills */}
          <div className="space-y-8">
            <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-2xl border-4 border-white shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden group">
                <div className="text-6xl font-bold text-slate-400 group-hover:scale-110 transition-transform">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {skills.map((skill, index) => {
                const IconComponent = iconMap[skill.icon];
                return (
                  <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-slate-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                      {IconComponent && <IconComponent className="h-6 w-6 text-slate-700" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{skill.title}</h4>
                      <p className="text-sm text-slate-600">{skill.description}</p>
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
};

export default About;