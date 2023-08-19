import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Intro from './components/Intro.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'

  function App(){
    return (
      <div className="page">
        <Header />
        <Intro />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    )
  };


export default App
