import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
