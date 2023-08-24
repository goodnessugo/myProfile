import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Popnavbar = () => {
    return (
        <>
            <div className=' '>

                {/* this is the list section  */}


                <div className='flex flex-col justify-center items-center w-full font-bold text-2xl md:hidden  '>
                    <Link to='/' ><button className=' w-screen bg-gray-500 hover:bg-gray-200 hover:text-black ease-in-out duration-300 h-full p-5'>Home</button></Link>
                    <Link to='#about'  ><button className='w-screen bg-gray-500  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full p-5'>About</button></Link>
                    <Link to='#projects'  ><button className='w-screen bg-gray-500  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full p-5'>Projects</button></Link>
                    <Link to='#skill'  ><button className='w-screen bg-gray-500  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full p-5'>Skill</button></Link>
                    <Link to='#contact'  ><button className=' w-screen bg-gray-500  hover:bg-gray-200 hover:text-black ease-in-out duration-300  h-full p-5 '>Contact</button></Link>
                </div>


            </div>
        </>
    )
}

export default Popnavbar