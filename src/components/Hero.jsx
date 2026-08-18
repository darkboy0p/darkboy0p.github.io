import React from 'react'
import { ArrowRight, Github, Mail, MessageSquare, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[rgba(255,255,255,0.08)] rounded-full px-4 py-1.5 mb-6">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-[#A1A1AA]">Available for projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-4">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">{personalInfo.name}.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#A1A1AA] mb-3">
              I build digital experiences that feel as good as they work.
            </p>

            <p className="text-base md:text-lg text-[#71717A] max-w-lg mb-8 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#work" className="bg-[#8B5CF6] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#6366F1] hover:shadow-lg hover:shadow-[#8B5CF6]/25 inline-flex items-center gap-2">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="border border-white/10 text-[#F5F5F5] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/5 hover:border-white/20 inline-flex items-center gap-2">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.social.discord} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.social.email} 
                className="text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <span className="text-[#71717A] text-sm flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-[#111114] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-2xl shadow-[#8B5CF6]/5">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-[#71717A] text-xs ml-2 font-mono">portfolio — bash</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div>
                  <span className="text-[#8B5CF6]">darkboy0p</span>
                  <span className="text-[#71717A]">@</span>
                  <span className="text-[#6366F1]">portfolio</span>
                  <span className="text-[#71717A]"> ~ $</span>
                  <span className="text-[#F5F5F5] ml-2">whoami</span>
                </div>
                <div className="pl-4 text-[#A1A1AA]">
                  {personalInfo.name}
                </div>
                
                <div className="pt-2">
                  <span className="text-[#8B5CF6]">darkboy0p</span>
                  <span className="text-[#71717A]">@</span>
                  <span className="text-[#6366F1]">portfolio</span>
                  <span className="text-[#71717A]"> ~ $</span>
                  <span className="text-[#F5F5F5] ml-2">focus</span>
                </div>
                <div className="pl-4 space-y-1 text-[#A1A1AA]">
                  <div>Web Development</div>
                  <div>UI/UX</div>
                  <div>Automation</div>
                  <div>Digital Products</div>
                </div>
                
                <div className="pt-2">
                  <span className="text-[#8B5CF6]">darkboy0p</span>
                  <span className="text-[#71717A]">@</span>
                  <span className="text-[#6366F1]">portfolio</span>
                  <span className="text-[#71717A]"> ~ $</span>
                  <span className="text-[#F5F5F5] ml-2">status</span>
                </div>
                <div className="pl-4 flex items-center gap-2 text-green-500">
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm">Building</span>
                </div>

                <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
                  <span className="text-[#71717A] text-xs">▸ Ready to build something great</span>
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
