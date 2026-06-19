import React from 'react'
import { CheckCircle, Clock, MapPin } from 'lucide-react'
import { personalInfo, services, skills } from '../data/portfolioData'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm {personalInfo.name}, a frontend developer from {personalInfo.location}. 
            I specialize in creating landing pages and portfolio websites that are fast, responsive, and beautiful.
          </p>
          <div className="flex items-center justify-center space-x-2 text-slate-500 mt-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{personalInfo.location}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Clock className="h-4 w-4" />
                    <span>{service.turnaround}</span>
                  </div>
                  <span className="font-bold text-slate-900">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About