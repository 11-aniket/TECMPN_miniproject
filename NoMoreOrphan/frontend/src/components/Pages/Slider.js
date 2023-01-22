import React, { useEffect } from 'react'
import { useState } from 'react';

const imageSlider = [ 
    "./images/slider_image_1.jpeg",
    "./images/slider_image_2.jpeg",
    "./images/slider_image_3.jpeg",
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleOnNextClick = () => {
        if(currentIndex == imageSlider.length-1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
    };
    const handleOnPrevClick = () => {
        if(currentIndex == 0){
            setCurrentIndex(imageSlider.length-1)
        }
        else{
        setCurrentIndex(currentIndex-1)
        }
    };

    useEffect (() => {
    //  startSlider()
    }, [])

    const startSlider = () => {
        setInterval(() => {
            handleOnPrevClick();
        }, 3000);
    }
  return (
   <>
      <div className="flex relative">   
            <img className='md:h-[730px] h-96 w-full px-1' src={imageSlider[currentIndex]} alt="" />
            <div className=" z-[3] absolute w-screen top-1/2 transform -translate-y-1 py-2 px-4 flex justify-between items-center text-2xl text-white font-extrabold">
                <button className='hover:underline hover:text-gray-100 hover:font-bold'onClick={handleOnPrevClick}>Prev</button>
                <button className='hover:underline hover:text-gray-300 hover:font-bold mr-4'onClick={handleOnNextClick}>Next</button>
            </div>
            <div className=' absolute w-full z- top-1/4  transform -translate-y-1 py-2 px-3 flex flex-col items-center md:text-2xl text-lg text-white font-semibold'>
                <p className=' text-center w-full md:text-5xl text-xl text-gray-900 z-0 '>
            <h2 className='text-[#26712b]'>Help the <span className='md:text-7xl text-2xl text-[#6366f3]'>People</span></h2><br />
            <h1>Grow up <span className='md:text-7xl text-2xl text-[#6366f3]' >HUMANITY</span>&</h1><br />
            <span className='md:text-7xl text-2xl text-[#6366f3]'>Kindness</span><br />
            </p>
            <a className=' z-[1] text-xl my-10 bg-red-300 opacity-70 rounded-3xl px-5 py-3 relative hover:underline hover:opacity-100 text-black' href='https://en.wikipedia.org/wiki/Orphanage' target="_blank">Learn more... </a>
            </div>  
             
      </div>
    
   </>
  )
}

export default Slider