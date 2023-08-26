import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

const Skill = () => {
  return (
    <>
      <div className='h-fit sm:h-fit bg-gray-100  grid grid-row-1 py-10 w-full' id='skill'>
        {/* first section */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className=' bg-orange-300  px-3  font-bold '>My Skills</h1>
          <h1 className='text-center text-4xl font-bold py-5 '>List of my Skills Sets</h1>
        </div>


        {/* the progress bars section */}
        <div className='w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2  px-2 sm:px-8 gap-5 font-bold'>

          {/* html skill */} 
          <div className=' '>
            <p>html</p>
            <ProgressBar completed={85} bgColor='#2956b2' animateOnRender={true} />
          </div>

          
          {/* CSS skill */}
          <div className=' '>
            <p>CSS</p>
            <ProgressBar completed={65} bgColor='#2956b2' animateOnRender={true} />
          </div>

          {/* JavaScript */}
          <div className=' '>
            <p>JavaScript</p>
            <ProgressBar completed={95} bgColor='#2956b2' animateOnRender={true} />
          </div>

          {/* React skill */}
          <div className=' '>
            <p>React</p>
            <ProgressBar completed={88} bgColor='#2956b2' animateOnRender={true} />
          </div>

          {/* Tailwind skill */}
          <div className='  '>
            <p>Tailwind</p>
            <ProgressBar completed={70} bgColor='#2956b2' animateOnRender={true} />
          </div>

          {/* BootStrap skill */}
          <div className=''>
            <p>BootStrap</p>
            <ProgressBar completed={55} bgColor='#2956b2' animateOnRender={true} />
          </div>


        </div>

      </div>

    </>
  )
}

export default Skill