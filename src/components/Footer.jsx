import React from 'react'
import { Github, Mail, Discord, Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-text-primary tracking-tight">
              {personalInfo.name.toLowerCase()}.
            </span>
            <p className="text-text-muted text-sm mt-1">
              Built with <Heart className="h-3 w-3 text-accent inline fill-accent" /> &amp; code.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={personalInfo.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href={personalInfo.social.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Discord"
            >
              <Discord className="h-4 w-4" />
            </a>
            <a 
              href={personalInfo.social.email} 
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="text-text-muted text-sm">
            © {new Date().getFullYear()} {personalInfo.name}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
