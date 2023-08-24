import React from 'react'
import image2 from '../images/man2.jpg'
import image3 from '../images/lion.jpg'

const Thumnail = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-3  px-10 py-10 gap-6  items-center content-tabs'>
                {/* <img src={image2} alt=""  className='h-96 w-96'/>
                <img src={image2} alt=""  className='h-96 w-96'/>
                <img src={image2} alt=""  className='h-96 w-96'/>
                <img src={image2} alt=""  className='h-96 w-96'/>
                <img src={image2} alt=""  className='h-96 w-96'/>
                <img src={image2} alt=""  className='h-96 w-96'/> */}

                <div className={toggleState === 1 ? "content active-content" : "content"}>
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

    )
}

export default Thumnail