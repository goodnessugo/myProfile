import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
// import Thumnail from './Thumnail'
// import Details from './Details'
import { useState } from 'react'
import image2 from '../images/man2.jpg'
import image3 from '../images/lion.jpg'

const Projects = () => {



  // this sets the useState to logically select the tabs and content, but initials setting it to number 1
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
// ************* ends here *****************

  return (
    <>
      <div className='h-fit sm:h-fit bg-gray-400  grid grid-row-1 py-5' id='projects'>
        {/* first section */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className=' bg-orange-300  px-3  font-bold '>Projects</h1>
          <h1 className='text-center text-4xl font-bold py-5 '>Some of my most recent projects</h1>
        </div>


        {/* the mid menu section */}
        <div className=' flex justify-evenly items-center  sm:px-44  font-bold '>
          <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"} >All</div>
          <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs"} >Details</div>
          <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "tabs active-tabs" : "tabs"} >Mockups</div>
          <div onClick={() => toggleTab(4)} className={toggleState === 4 ? "tabs active-tabs" : "tabs"} >Youtube Videos</div>
          <div onClick={() => toggleTab(5)} className={toggleState === 5 ? "tabs active-tabs" : "tabs"} >Vimeo Videos</div>

        </div>
  


      </div>
      

      {/* below are the contents which are initial set to none the visible when clicking the tabs */}
      <>
            <div className='px-10 py-10 bg-gray-400 content-tabs'>
               

                <div className={toggleState === 1 ? "content active-content" : "content" }>
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />

                </div>


                {/* next set */}
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <img src={image3} alt="" />
                    <img src={image3} alt="" />
                    <img src={image3} alt="" />
                    <img src={image3} alt="" />
                    <img src={image3} alt="" />
                    <img src={image3} alt="" />

                </div>

                {/* next set */}
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                   

                </div>

                {/* next set */}
                <div    className={toggleState === 4 ? "content active-content" : "content"}>
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                    
                </div>

                {/* next set */}
                <div    className={toggleState === 5 ? "content active-content" : "content"}>
                    <img src={image2} alt="" />
                    <img src={image2} alt="" />
                    

                </div>


            </div>
        </>
    </>
  )
}

export default Projects