import React from 'react'
import { CheckCircle, Clock } from 'lucide-react'
import { personalInfo, services, timeline } from '../data/portfolioData'

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">About</span>
            <h2 className="heading-lg mt-2 mb-4">A little about me.</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {personalInfo.description}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm based in {personalInfo.location} and focused on building modern, 
              performant web experiences that solve real problems.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="card-glass p-4 text-center">
                <div className="text-2xl font-bold text-accent">{projects.length}+</div>
                <div className="text-text-muted text-sm">Projects</div>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-2xl font-bold text-accent">4+</div>
                <div className="text-text-muted text-sm">Technologies</div>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-2xl font-bold text-accent">2024</div>
                <div className="text-text-muted text-sm">Started</div>
              </div>
            </div>
          </div>

          {/* Right - What I Do */}
          <div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Services</span>
            <h3 className="heading-md mt-2 mb-6">What I do.</h3>
            
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="card-glass p-5 group">
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-sm font-bold min-w-[2rem]">
                      {service.id}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <div className="flex items-center gap-1.5 text-text-muted">
                          <Clock className="h-4 w-4" />
                          <span>{service.turnaround}</span>
                        </div>
                        <span className="text-accent font-semibold">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Development Journey</h4>
              <div className="space-y-3">
                {timeline.map((item) => (
                  <div key={item.year} className="flex items-start gap-4">
                    <span className="text-accent font-mono text-sm font-bold min-w-[3.5rem]">
                      {item.year}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{item.title}</div>
                      <div className="text-text-muted text-xs">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Need to import projects for stats
import { projects } from '../data/portfolioData'

export default About
