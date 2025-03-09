import React from 'react'
import NavBar from './components/NavBar'
import Events from './components/Events.jsx'
import Footer from './components/Footer'
import About from './components/About.jsx'
import Hero from './components/Hero'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <About/>
      <Events/>
      <Contact/>
      <Footer/>
       
    </div>
  )
}

export default App