import React from 'react'
import Side_nav from './SideNav'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'

const PhotoGallery = () => {
  return (
    <>
    <Side_nav/>
    <div className='absolute left-64 top-16 space-y-4 w-4/5 hover:cursor-pointer'>
    <div className=' pt-3 font-bold sm: text-sm md:text-base flex float-right mr-5'>
              <MdOutlineAddPhotoAlternate className='w-9 h-7 mt-2' />
                <a className='mt-3' href="">Add Gallery</a>
    </div>
    <div className='bg-blue-300'>
        <h1 className='text-3xl mr-2 px-4 font-extrabold border-solid border-2 border-black text-center'>Gallery</h1>
        <div className='px-3 py-5 table justify-evenly w-fit'>
        <img className='w-1/3 p-3 m-5 border-2 border-black float-left' src="./images/Gallery/Gallery-1.jpeg" alt="" />
        <img className='w-1/3 p-3 m-5 border-2 border-black float-left' src="./images/Gallery/Gallery-1.jpeg" alt="" />
        <img className='w-1/3 p-3 m-5 border-2 border-black float-left' src="./images/Gallery/Gallery-1.jpeg" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default PhotoGallery