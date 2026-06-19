import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Zap, Star, Clock, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    'Landing Pages',
    'Portfolio Sites',
    'Fast Websites',
    'Modern UI/UX',
  ];

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, currentIndex + 1));
        currentIndex++;
        
        if (currentIndex === currentPhrase.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000); // Wait before deleting
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, currentIndex - 1));
        currentIndex--;
        
        if (currentIndex === 0) {
          isDeleting = false;
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
      
      timeout = setTimeout(type, isDeleting ? 50 : 100);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-slate-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-100 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="md:flex md:items-center md:justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-3/5 space-y-8 text-center md:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 animate-fadeIn">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700">Available for Projects</span>
              <span className="mx-2 text-slate-300">|</span>
              <span className="text-sm font-bold text-slate-900">Starting at 800 ৳</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              <span className="block">Hi, I'm </span>
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 h-12">
              I Build{' '}
              <span className="text-slate-900 border-r-4 border-slate-900 animate-pulse">
                {typedText}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl md:mx-0 mx-auto leading-relaxed">
              I create ultra-fast, responsive landing pages and portfolio websites that help businesses and professionals stand out online. 
              <span className="block mt-2 font-medium text-slate-700">
                Clean code. Modern design. Delivered in 2-4 days.
              </span>
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="ml-1 font-medium">5.0 Rating</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-slate-500" />
                <span>Fast Delivery</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-slate-500" />
                <span>100% Satisfaction</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#about"
                className="group bg-gradient-to-r from-slate-700 to-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-600 hover:to-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center hover:scale-105 transform"
              >
                <span>View My Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-800 hover:text-slate-900 transition-all w-full sm:w-auto text-center hover:scale-105 transform bg-white/50 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span>Hire Me — 800 ৳</span>
                </span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 justify-center md:justify-start pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">10+</span> Happy Clients
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 justify-center md:justify-start pt-2">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="hidden md:block md:w-2/5">
            <div className="relative">
              {/* Main Card */}
              <div className="relative mx-auto w-72 h-72 lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                
                {/* Profile Circle */}
                <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-500">
                  {/* Inner Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* Initial */}
                  <div className="relative text-center">
                    <div className="text-8xl font-bold text-slate-400 group-hover:text-slate-500 transition-colors">
                      {personalInfo.name[0]}
                    </div>
                    <div className="text-sm font-medium text-slate-500 mt-2">Frontend Developer</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              {/* Card 1 - Projects */}
              <div className="absolute top-0 right-0 bg-white rounded-xl shadow-lg p-4 border border-slate-200 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">10+</div>
                    <div className="text-xs text-slate-500">Projects Done</div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Delivery */}
              <div className="absolute bottom-10 left-0 bg-white rounded-xl shadow-lg p-4 border border-slate-200 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">2-4 Days</div>
                    <div className="text-xs text-slate-500">Delivery Time</div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Price */}
              <div className="absolute top-20 left-0 bg-white rounded-xl shadow-lg p-4 border border-slate-200 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">800 ৳</div>
                    <div className="text-xs text-slate-500">Starting Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;