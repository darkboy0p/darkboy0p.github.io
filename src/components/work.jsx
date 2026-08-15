import React from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { projects } from '../data/portfolioData'

const Work = () => {
  return (
    <section id="work" className="section-padding bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="heading-lg mt-2 mb-4">Selected Work</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A selection of things I've designed, built, and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group card-glass overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-background-secondary">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent-secondary/5 flex items-center justify-center">
                  <span className="text-5xl font-bold text-text-muted/20">{project.title[0]}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-text-primary text-sm font-medium px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-accent text-xs font-semibold tracking-wider uppercase">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-border rounded-full text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors group/link"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-all -translate-x-1 group-hover/link:translate-x-0" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors group/link"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-all -translate-x-1 group-hover/link:translate-x-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
