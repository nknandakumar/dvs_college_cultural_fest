import React from 'react'

import Events from '../components/Events'
import Footer from '../components/Footer'
import About from '../components/About.jsx'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>

      <Hero/>
      <About/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default Home