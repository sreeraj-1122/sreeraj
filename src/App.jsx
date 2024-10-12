import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { About, Contact, Header, Skills, Work } from './containers'
import Footer from './components/Footer/Footer';
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App