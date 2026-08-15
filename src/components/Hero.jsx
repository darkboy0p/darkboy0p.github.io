import React from 'react'
import { ArrowRight, Github, Mail, Discord, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-border rounded-full px-4 py-1.5 mb-6">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-text-secondary">Available for projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-4">
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}.</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary mb-3">
              I build digital experiences that feel as good as they work.
            </p>

            <p className="text-base md:text-lg text-text-muted max-w-lg mb-8 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#work" className="btn-primary">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.social.discord} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Discord"
              >
                <Discord className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.social.email} 
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <span className="text-text-muted text-sm flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Right - Terminal Card */}
          <div className="hidden lg:block">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl shadow-accent/5">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-text-muted text-xs ml-2 font-mono">portfolio — bash</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div>
                  <span className="text-accent">darkboy0p</span>
                  <span className="text-text-muted">@</span>
                  <span className="text-accent-secondary">portfolio</span>
                  <span className="text-text-muted"> ~ $</span>
                  <span className="text-text-primary ml-2">whoami</span>
                </div>
                <div className="pl-4 text-text-secondary">
                  {personalInfo.name}
                </div>
                
                <div className="pt-2">
                  <span className="text-accent">darkboy0p</span>
                  <span className="text-text-muted">@</span>
                  <span className="text-accent-secondary">portfolio</span>
                  <span className="text-text-muted"> ~ $</span>
                  <span className="text-text-primary ml-2">focus</span>
                </div>
                <div className="pl-4 space-y-1 text-text-secondary">
                  <div>Web Development</div>
                  <div>UI/UX</div>
                  <div>Automation</div>
                  <div>Digital Products</div>
                </div>
                
                <div className="pt-2">
                  <span className="text-accent">darkboy0p</span>
                  <span className="text-text-muted">@</span>
                  <span className="text-accent-secondary">portfolio</span>
                  <span className="text-text-muted"> ~ $</span>
                  <span className="text-text-primary ml-2">status</span>
                </div>
                <div className="pl-4 flex items-center gap-2 text-green-500">
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm">Building</span>
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-text-muted text-xs">▸ Ready to build something great</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
