import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-800 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App