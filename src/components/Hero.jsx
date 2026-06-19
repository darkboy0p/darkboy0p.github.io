import React from 'react'
import { ArrowRight, Zap, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 mb-6">
          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm text-slate-600">Available for Projects</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
          Hi, I'm {personalInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-4">
          I Build Fast & Beautiful Websites
        </p>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
          {personalInfo.tagline}
        </p>

        <div className="flex items-center justify-center space-x-2 text-slate-500 mb-8">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{personalInfo.location}</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#about" className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 inline-flex items-center space-x-2">
            <span>View My Services</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#contact" className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-800 inline-flex items-center space-x-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span>Hire Me — 800 ৳</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero