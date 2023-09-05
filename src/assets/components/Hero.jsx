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
import Image3 from '../images/myProfileImage.jpg'
import { BsArrowDownCircle } from 'react-icons/bs'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { TypeAnimation } from 'react-type-animation';
import { HashLink as Link} from 'react-router-hash-link'


const Hero = () => {

  // this is the Typewriter words selection section
  // const {text} = useTypewriter({
  //   words: ['Freelancer', 'Designer', 'Musician'],
  //   loop: {},
  // });





  return (
    <>
      <div>

        {/* Navbar Located above the Hero section */}

        <Navbar />



        {/* the Hero Section  */}


        <div className='grid grid-row-2 h-fit sm:h-screen py-24 bg-gray-400  sm:grid-cols-2 items-center ' id='hero' >

          {/* hero image */}
          <div className='flex justify-center'>
            <img src={Image3} alt="image" className=' rounded-full h-72 d sm:h-96 w-auto border-8 border-white drop-shadow-2xl' />
          </div>


          <div className='  flex flex-col justify-center items-center sm:grid grid-row-1 sm:justify-start '>
            <h1 className='text-3xl sm:text-5xl  pt-10 sm:pb-3 text-gray-700 ' > I AM A FREELANCER </h1>

            <h1 className='text-5xl sm:text-7xl font-bold text-white drop-shadow-xl pb-5 sm:pb-0'>
            
              <TypeAnimation
                sequence={[
                  'GOODNESS', 1000,
                  'WED DEVELOPER', 1000,
                  'DESIGNER', 1000,
                  'ENTERPRENUER', 1000
                ]}
                style={{ color: 'white' }}
                repeat={Infinity} />
              </h1>

            <h1 className='text-2xl sm:text-3xl'>based in Lagos, <span className='text-gray-700 font-bold'>NIGERIA.</span></h1>

            <div className=' '>
              <Link to='#projects' smooth>
                <button className='py-5 px-9 my-7 bg-gray-700 text-white font-bold  hover:bg-yellow-300 ease-in-out duration-200 hover:text-black'>View My Works</button>

              </Link>
              <br />
              <Link to='#about' smooth>
              <BsArrowDownCircle size='2rem' className='hover:cursor-pointer animate-bounce hover:scale-2' />
         
              </Link>   
              
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