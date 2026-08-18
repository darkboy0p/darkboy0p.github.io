import React, { useState } from 'react'
import { Mail, MapPin, Github, MessageSquare, Send, ArrowRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Contact</span>
          <h2 className="heading-lg mt-2 mb-4">Have an idea? Let's build it.</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I'm interested in building useful, interesting, and ambitious digital products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div className="card-glass p-6 flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-text-muted text-sm">Email</div>
                <a href={personalInfo.social.email} className="text-text-primary hover:text-accent transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="card-glass p-6 flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-text-muted text-sm">Location</div>
                <div className="text-text-primary">{personalInfo.location}</div>
              </div>
            </div>

            <div className="card-glass p-6 flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Github className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-text-muted text-sm">GitHub</div>
                <a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors"
                >
                  @darkboy0p
                </a>
              </div>
            </div>

            <div className="card-glass p-6 flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-text-muted text-sm">Discord</div>
                <a 
                  href={personalInfo.social.discord} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors"
                >
                  @darkboy0p
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="card-glass p-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-text-secondary text-sm font-medium block mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-text-primary placeholder:text-text-muted"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-text-secondary text-sm font-medium block mb-1.5">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-text-primary placeholder:text-text-muted"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="text-text-secondary text-sm font-medium block mb-1.5">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-text-primary placeholder:text-text-muted resize-none"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-accent text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-accent-secondary transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
