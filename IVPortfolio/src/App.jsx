import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = About
      break
    case "/portfolio":
      Component = Portfolio
      break
    case "/resume":
      Component = Resume
      break
    case "/contact":
      Component = Contact
      break
  }

  return (
    <>
      <Navbar />
      <div className="container">
      <Component />
      </div>
    </>
  )
}

export default App
