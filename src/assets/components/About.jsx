import React from 'react'

const About = () => {
  return (
    <>
      <div className='h-fit sm:h-screen py-16 sm:py-12 px-2 sm:px-16 bg-gray-200 grid grid-col-1  sm:g' id='about'>
        {/* first section */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className=' bg-orange-300 py-1 px-3 font-bold '>About Me</h1>
          <h1 className='text-4xl font-bold py-5'>Know Me More</h1>
        </div>

        {/* second section */}
        <div className='grid grid-row-1 sm:grid-cols-2 justify-between  py-5'>
          <div>
            <h1 className='text-3xl py-5 text-center sm:text-left'>Hi, I'm <span className='font-bold underline underline-offset-8 decoration-orange-400 text-gray-500'>Goodness George Ugochukwu</span></h1>
            <h1 className='text-2xl text-center sm:text-left '>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our motto.</h1>
          </div>
          <div className=' px-2 py-5 flex flex-col justify-center items-center'>
            <div className='bg-orange-500 h-48 w-48 flex justify-center items-center  rounded-full '>
              <h1 className='font-bold text-8xl  sm:text-9xl text-white'>27</h1>
            </div>
            <h1 className='text-3xl'>Years of <span className='font-bold '>Experience</span></h1>
          </div>

        </div>


        {/* third section */}
        <div className='grid grid-cols-2 gap-3 sm:gap-0 sm:grid-cols-4 '>
          <div className='font-bold '>
            <h1 className='text-gray-500 '>Name:</h1>
            <h1>Goodness George U.</h1>
          </div>

          <div className='font-bold '>
            <h1 className='text-gray-500 '>Email:</h1>
            <h1 className='underline decoration-orange-400 underline-offset-4 '>ggggg@gmail.com</h1>
          </div>

          <div className='font-bold '>
            <h1 className='text-gray-500 '>Date of Birth:</h1>
            <h1>05 May, 1996</h1>
          </div>

          <div className='font-bold '>
            <h1 className='text-gray-500 '>From:</h1>
            <h1>Anambra State, Nigeria.</h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default About