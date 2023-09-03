import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { AiOutlineBars } from 'react-icons/ai'
import Popnavbar from './Popnavbar'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


// the NavLink Section or modal section
const NavLinks = () => {


  return (
    <>



      <div className=' '>
        <Link to='#hero' ><button className=' bg-gray-700 hover:bg-gray-200 hover:text-black ease-in-out duration-300 h-full px-5' >Home</button></Link>
        <Link to='#about'  ><button className='bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5' >About</button></Link>
        <Link to='#projects'  ><button className='bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5' >Projects</button></Link>
        <Link to='#skill'  ><button className=' bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5'>Skill</button></Link>
        <Link to='#contact'  ><button className='  bg-gray-700  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full px-5 '>Contact</button></Link>

      </div>



    </>
  );
};





// ---------------------------below is the Navbar Section--------------------------------




const Navbar = () => {

  // this tunrs the NavLinks off and on 


  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>

      <nav className='modal z-[60] grid grid-cols-2 bg-gray-700 text-white font-bold  fixed  w-screen'>

        {/*  modal-content this is the logo section */}
        <div className=' logo'>
          <Link to='/'><h1 className='text-orange-300 pt-1 sm:pt-2 pl-5 sm:pl-10  text-1xl  sm:text-2xl'>Goodness G.</h1></Link>
        </div>

        {/* this is the list section  */}

        <div className='hidden  md:flex justify-evenly   h-12 '>
          <NavLinks />
        </div>



        {/* top bar */}
        <div className='bg-gray-600  hover:bg-gray-200 hover:text-black ease-in-out duration-300 h-full  flex justify-center items-center md:hidden' onClick={toggleNavbar}>
          {/* <button >
            {isOpen ? <X /> : <Menu />}
          </button> */}
          <button >
            <Menu />
          </button>
        </div>




        {/* this is the mobile view menu */}
        {isOpen && (
          <div className='bg-red-500 opacity-80 fixed z-[75] w-screen h-screen md:hidden' onClick={toggleNavbar}>

            {/* the close button */}
            <button className=' flex justify-end w-screen px-20 pt-12 ' onClick={toggleNavbar}>
              <X />
            </button>

            <div className=' flex flex-col justify-center items-center pt-12 gap-7 text-2xl w-screen'>
              <Link to='#hero' ><button className='w-screen   py-3 hover:bg-gray-200 hover:text-black ease-in-out duration-300 ' >Home</button></Link>
              <Link to='#about'  ><button className='w-screen  py-3 hover:bg-gray-200 hover:text-black ease-in-out duration-300 ' >About</button></Link>
              <Link to='#projects'  ><button className=' w-screen  py-3 hover:bg-gray-200 hover:text-black ease-in-out duration-300  ' >Projects</button></Link>
              <Link to='#skill'  ><button className=' w-screen  py-3 hover:bg-gray-200 hover:text-black ease-in-out duration-300  '>Skill</button></Link>
              <Link to='#contact'  ><button className='  w-screen  py-3 hover:bg-gray-200 hover:text-black ease-in-out duration-300  '>Contact</button></Link>

            </div>



          </div>
        )}


      </nav>

      {/* overlay */}
      {/* <div className=' z-[40] md:hidden overlay w-full h-full  fixed bg-red-200 opacity-75' onClick={toggleNavbar}>

        </div> */}








    </>
  )
}

export default Navbar