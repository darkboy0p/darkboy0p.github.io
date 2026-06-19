import React, { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { personalInfo, navLinks } from '../data/portfolioData'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2 text-slate-800 font-bold text-xl">
            <Code2 className="h-6 w-6" />
            <span>{personalInfo.name}</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-slate-900 text-sm font-medium">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-700">
              Hire Me
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-600">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 text-slate-600" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="block mt-2 bg-slate-800 text-white px-5 py-2 rounded-lg text-center text-sm font-semibold" onClick={() => setIsOpen(false)}>
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar