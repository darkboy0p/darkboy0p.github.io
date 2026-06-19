import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-slate-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-2/3 space-y-6">
            <div className="inline-flex items-center bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-200 animate-pulse">
              <span className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-slate-600">Available for work</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Hello, I'm <br className="md:hidden" />
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl md:mx-0 mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="group bg-slate-800 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center hover:scale-105 transform"
              >
                <span>View My Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="border-2 border-slate-300 text-slate-700 px-8 py-3.5 rounded-lg font-semibold hover:border-slate-800 hover:text-slate-900 transition-all w-full sm:w-auto text-center hover:scale-105 transform"
              >
                Let's Talk
              </a>
            </div>

            <div className="flex items-center space-x-4 justify-center md:justify-start pt-4">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg">
                <Github className="h-5 w-5" />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="hidden md:block md:w-1/3">
            <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-slate-400">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;