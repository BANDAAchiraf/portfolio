import { useState, useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import ScrollTop from './components/ui/ScrollTop'
import Loader from './components/ui/Loader'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  if (loading) return <Loader />

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-midnight-950' : 'bg-slate-50'} relative`}>
        <div className="noise-overlay" />
        <div className="grid-bg fixed inset-0 pointer-events-none" />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  )
}
