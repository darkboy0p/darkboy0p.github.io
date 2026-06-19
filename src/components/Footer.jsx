import React from 'react';
import { Github, Linkedin, Twitter, Heart, ArrowUp, Mail, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { getCurrentYear } from '../utils/helpers';

const Footer = () => {
  const currentYear = getCurrentYear();
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mahdi</h3>
                <p className="text-xs text-slate-400">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A passionate full-stack developer from Narsingdi, Bangladesh, crafting digital experiences that make a difference. Available for freelance projects and collaborations.
            </p>
            
            {/* Newsletter Signup */}
            <div className="pt-2">
              <p className="text-sm font-medium text-white mb-2">Subscribe to my newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-l-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
                />
                <button className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-r-lg transition-colors">
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full group-hover:bg-white transition-colors"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Additional Links */}
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mt-8 mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full group-hover:bg-white transition-colors"></span>
                  <span>Web Development</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full group-hover:bg-white transition-colors"></span>
                  <span>UI/UX Design</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full group-hover:bg-white transition-colors"></span>
                  <span>API Development</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Get In Touch</h4>
            
            <div className="space-y-4 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium">{personalInfo.email}</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-3 text-slate-400">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm font-medium text-white">Narsingdi Sadar, Bangladesh</p>
                </div>
              </div>
              
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="text-sm font-medium">{personalInfo.phone}</p>
                </div>
              </a>
            </div>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect With Me</h4>
            <div className="flex items-center space-x-3">
              {Object.entries(personalInfo.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return Icon ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600 transition-all hover:scale-110 transform"
                    title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>in Narsingdi, Bangladesh</span>
            </p>
            
            <p className="text-xs text-slate-500">
              &copy; {currentYear} Mahdi. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
            >
              <span className="text-sm">Back to Top</span>
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-all group-hover:-translate-y-1">
                <ArrowUp className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;