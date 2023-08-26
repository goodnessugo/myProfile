import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiBasketball } from 'react-icons/bi'



const Contact = () => {
  return (
    <>
      <div className='h-fit sm:h-screen bg-gray-400 grid grid-cols-1 sm:grid-cols-2 px-10 py-20' id='contact'>

        {/* the left section */}
        <div className='px-2 sm:px-10 grid text-center sm:grid-cols-1'>
          <h1 className='text-4xl font-bold py-5'>Let's get in touch</h1>
          <h1 className='text-2xl py-5'>I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</h1>
          <h1 className=' text-2xl py-2'><span className='font-bold'>Living In:</span><br />
            6 Yetunde street, Lagos,Nigeria.</h1>
          <h1 className=' text-2xl py-2'><span className='font-bold'>Call:</span><br />

            (+234) 90 347 62 859</h1>

          {/* social media icons section  */}
          <h1 className='flex justify-center gap-6 items-center py-5 text-4xl'>

            <AiFillTwitterCircle className='cursor-pointer hover:text-blue-500 ease-in-out duration-300' />

            <BsFacebook className='cursor-pointer hover:text-blue-700 ease-in-out duration-300' />

            <AiOutlineInstagram className='cursor-pointer hover:text-violet-500 ease-in-out duration-300' />

            <AiOutlineGithub className='cursor-pointer hover:text-red-500 ease-in-out duration-300' />

            <BiBasketball className='cursor-pointer hover:text-yellow-700 ease-in-out duration-300' />

          </h1>

        </div>




        {/* the right section */}
        <form>
          <div className='py-10 w-full'>
            <h1 className='text-4xl font-bold py-5 '>Estimate your Project?</h1>
            <h1 className=''>What is Your Name:</h1>
            <input type="text " className=' w-full h-12  border-black border-b-2 bg-transparent focus:ouline-none focus:shadow-none' />

            <h1 className='py-5'>Your Email Address:</h1>
            <input type="text" className='w-full h-12 border-black border-b-2 bg-transparent focus:ouline-none focus:shadow-none' />

            <h1 className='py-5'>How can I Help you?:</h1>
            <textarea type="text" className='w-full h-12 border-black border-b-2 bg-transparent focus:ouline-none focus:shadow-none' />

            <div className=' w-full flex justify-center sm:w-fit my-5 font-bold '>
              <button className='px-10 py-4 bg-gray-700 flex justify-center items-center gap-2 hover:bg-gray-500'>Send <BiRightArrowAlt /></button>
            </div>

          </div>
        </form>





      </div>
    </>
  )
}

export default Contact