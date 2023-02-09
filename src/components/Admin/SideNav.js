import React from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom'

function Sidenav  () {
  let Links = [
    // {name:"Home",link:"/childgallery"},
    {name:"Home",link:"/childgallery"},
    {name:"Photo Gallery",link:"/photogallery"},
    {name:"Missions",link:"/missions"},
    {name:"News Letter",link:"/newsletter"},
    {name:"Feedbaack",link:"/feedback"},
    // {name:"Contact Us",link:"/contactus"},
    {name:"Donation",link:"/"},
    {name:"Doctors",link:"/doctors"},
    {name:"Parents",link:"/parent_details"},
   ];
    let [open,setOpen] = useState(false);
  return (
    <>
    <topnav className=" fixed flex top-0 z-10 w-screen bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 mx-1 rounded-2xl ">
        <div className=" mr-3 h-6 sm:h-9 container flex-wrap md:justify-between justify-between mx-auto">
           <span className="self-center text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer">Orphanage Foundation Center</span>
        </div>
        <div onClick={()=> setOpen(!open)} 
        className="h-5 mr-3 w-6 cursor-pointer md:hidden">
          <img src={open ? "../images/cancel.png" : "../images/menu.png"}alt="" />
        </div>
    </topnav>
    <sidenav className={`md:flex md:items-center md:space-x-5 md:py-0 pb-8 md:px-0 px-5 flex m-4 py-6 absolute md:static md:z-auto z-[4] md:mt-16 md:w-2/5 left-0 top-0 md:my-0 my-14 md:mx-0 mx-1 w-fit transition-all duration-500 ease-in rounded-2xl ${ open ? 'top-0' : '-top-[1000px]'}`}>
        <div className='flex flex-col cursor-pointer sm:text-white sm:bg-slate-600 md:bg-white md:text-black font-semibold md:w-2/5 sm:w-1/2 mx-4 space-y-3 py-5'>
            <ul className='space-y-3'>
              {
                Links.map((link)=>(
                  <li key={link.name} className = 'hover:border-solid hover:border-2 hover:border-gray-500 md:m-2 text-xl md:px-2 '>
                    <Link to ={link.link}>{link.name}</Link>
                  </li>
                ))
              }
            </ul>

        </div>
        <div class=" absolute left-56 top-16 h-screen w-0.5 md:bg-gray-600 lg:bg-gray-600 bg-white"></div>
    </sidenav>
    </>
  )
}

export default Sidenav 