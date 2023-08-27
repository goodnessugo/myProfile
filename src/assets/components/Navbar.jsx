import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { AiOutlineBars } from 'react-icons/ai'
import Popnavbar from './Popnavbar'
import { useState } from 'react'

const Navbar = () => {

  // this tunrs the Popnavbar off and on 
  const [show, setShow] = useState(false);

  return (
    <>


      <div className='z-50 grid grid-cols-2 bg-gray-700 text-white font-bold  fixed w-full'>
        {/* this is the logo section */}
        <div className=' logo'>
          <Link to='/'><h1 className='text-orange-300 pt-1 sm:pt-2 pl-5 sm:pl-10  text-1xl2 sm:text-2xl'>Goodness G.</h1></Link>
        </div>

        {/* this is the list section  */}

        <div className='hidden md:flex justify-evenly  h-12  '>
          <Link to='#hero' ><button className=' bg-gray-700 hover:bg-gray-200 hover:text-black ease-in-out duration-300 h-full px-5' >Home</button></Link>
          <Link to='#about'  ><button className='bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5' >About</button></Link>
          <Link to='#projects'  ><button className='bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5' >Projects</button></Link>
          <Link to='#skill'  ><button className=' bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5'>Skill</button></Link>
          <Link to='#contact'  ><button className='  bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5 '>Contact</button></Link>
        </div>

        {/* top bar */}
        <div onClick={() => setShow(!show)} className='bg-gray-600 text-2xl hover:bg-gray-200 hover:text-black ease-in-out duration-300 h-full  flex justify-center items-center md:hidden'>
          <AiOutlineBars />
        </div>

      </div>

      {
        show ? <Popnavbar /> : null
      }

    </>
  )
}

export default Navbar