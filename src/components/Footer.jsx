import React from 'react'
import { Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="flex items-center justify-center space-x-1 text-sm">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>by {personalInfo.name} in {personalInfo.location}</span>
        </p>
        <p className="text-xs text-slate-500 mt-2">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer