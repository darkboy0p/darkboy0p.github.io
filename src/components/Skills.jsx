import React from 'react'
import { skills } from '../data/portfolioData'

const Skills = () => {
  const categories = [
    { name: 'Frontend', items: skills.frontend },
    { name: 'Backend', items: skills.backend },
    { name: 'Database', items: skills.database },
    { name: 'Tools', items: skills.tools },
  ]

  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Expertise</span>
          <h2 className="heading-lg mt-2 mb-4">Technologies I work with.</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="card-glass p-6">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-border rounded-lg text-sm text-text-secondary hover:text-text-primary hover:border-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
