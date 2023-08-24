import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Navbar from './assets/components/Navbar'
import Skill from './assets/components/Skill'
import Projects from './assets/components/Projects'
import Popnavbar from './assets/components/Popnavbar'
import Footer from './assets/components/Footer'
import  Thumbnail from './assets/components/Thumnail'
import Details from './assets/components/Details'

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/popnavbar' element={<Popnavbar />} />
          <Route path='/footer' element={<Footer/> }/>
          <Route path='/thumbnail' element={<Thumbnail /> }/>
          <Route path='/details' element={<Details /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
