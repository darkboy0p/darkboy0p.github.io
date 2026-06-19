import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600">Have a project? Let's work together!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700">{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700">{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700">{personalInfo.phone}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button type="submit" className="w-full bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 flex items-center justify-center space-x-2">
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact