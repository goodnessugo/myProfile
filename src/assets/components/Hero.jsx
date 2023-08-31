import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Skill from './Skill'
import Contact from './Contact'
import Popnavbar from './Popnavbar'
import Footer from './Footer'
// import { HashLink as Link } from 'react-router-hash-link'
import Image1 from '../images/man2.jpg'
import { BsArrowDownCircle } from 'react-icons/bs'


const Hero = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* the Hero Section  */}


        <div className='grid grid-row-2 h-fit sm:h-screen py-24 bg-gray-400  sm:grid-cols-2 items-center ' id='hero' >
          <div className='flex justify-center'>
            <img src={Image1} alt="image" className=' rounded-full h-72 sm:h-96 w-auto border-8 border-white drop-shadow-2xl'/>
          </div>
        <div className='  flex flex-col justify-center items-center sm:grid grid-row-1 sm:justify-start '>
          <h1 className='text-2xl sm:text-5xl'>HI, I'M A FREELANCER</h1>
          
          <h1 className='text-5xl sm:text-8xl font-bold text-white drop-shadow-xl'>GOODNESS</h1>
          
          <h1 className='text-2xl sm:text-3xl'>based in Lagos, NIGERIA.</h1>
          
          <div className=' '>
            <button className='py-5 px-9 my-7 bg-gray-700 text-white font-bold hover:bg-gray-600'>View My Works</button>
            <br />
            <BsArrowDownCircle size='2rem' />
          </div>
         
        </div>
          

        </div>


        <About />
        <Projects />
        <Skill />
        <Contact />
        <Footer />
       

      </div>
    </>

  )
}

export default Hero