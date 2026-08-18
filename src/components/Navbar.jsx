import React, { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { personalInfo, navLinks } from '../data/portfolioData'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#070707]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2 text-[#F5F5F5] font-bold text-xl group">
            <Code2 className="h-5 w-5 text-[#8B5CF6] group-hover:rotate-6 transition-transform" />
            <span className="tracking-tight">{personalInfo.name.toLowerCase()}.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[#A1A1AA] hover:text-[#F5F5F5] text-sm font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-[#8B5CF6] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#6366F1] transition-all hover:shadow-lg hover:shadow-[#8B5CF6]/25"
            >
              Let's Talk ↗
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#F5F5F5] hover:text-[#8B5CF6] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-[rgba(255,255,255,0.08)] space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-[#A1A1AA] hover:text-[#F5F5F5] text-base font-medium transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block bg-[#8B5CF6] text-white px-5 py-2.5 rounded-lg text-center text-sm font-semibold hover:bg-[#6366F1] transition-all"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
