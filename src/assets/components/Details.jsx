import React from 'react'
import lion from '../images/lion.jpg'

const details = () => {
  return (
    <>
            <div className='grid grid-cols-1 sm:grid-cols-3  px-10 py-10 gap-6  items-center '>
                <img src={lion} alt=""  className='h-96 w-96'/>
                <img src={lion} alt=""  className='h-96 w-96'/>
                <img src={lion} alt=""  className='h-96 w-96'/>
               
            </div>
        </>
  )
}

export default details