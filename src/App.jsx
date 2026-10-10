import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import TestimonialPage from './pages/TestimonialPage'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import BlogDetail from './pages/BlogDetail'

function App() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App