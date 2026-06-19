import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white relative">
      {/* Section background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-4xl font-bold text-slate-400">{project.title[0]}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-sm">View Project</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Problem Solved</p>
                  <p className="text-sm text-slate-700 font-medium">{project.problemSolved}</p>
                </div>
                
                <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <a
                    href={project.live}
                    className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors group"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors group"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;