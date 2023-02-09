import React from 'react'
import MyNavbar from './Navbar'
import {FiPhoneCall} from 'react-icons/fi'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <>
      <MyNavbar/>
      <div>
      <div className=' bg-emerald-800 h-96'>
            <div className='bg-slate-400 py-2 border-solid border-2 border-black m-5 mt-14 rounded-xl' >          
                <div className='font-semibold text-4xl underline justify-center text-center italic'>
                    <h1 className='p-3'>Contact Us</h1>
                    <hr className='h-1 bg-black my-1'/> 
                    <hr className='h-1 bg-black my-1'/>
                </div>
            </div>
            <p className=' underline absolute md:left-3/5 sm:left-1/3 w-autofont-semibold text-4xl mt-10 m-5 italic text-white text-center mx-3'>
                <span> Don't be a Stranger </span> <br />
                <span> Let's initiate our Conversation, <br /> by saying Hello</span> <br />
                <h3 className='text-xl mt-5'>just email us <a href="mailto: abc@example.com" className='text-black text-xl hover:text-blue-500'> orphanFoundation@slrtce.in</a></h3>
            </p>
       </div>
       <div className=' flex justify-center items-center m-2 mb-5'>
         <div className='border-solid border-2 border-black w-1/2'>
            <div className='flex flex-row float-left h-80 mx-5 my-2'>
               <div className='rounded w-3/4'>
                  <img className='h-full' src="./images/hello.jpg" alt="" />
                  {/* if wanted a border to image add border-solid border-2 border-black h */}
               </div>
                  <div className='justify-center items-center my-4 space-y-4'>
                    <div className='flex'>
                        <img className='h-16 w-16 m-2' src="./images/map.png" alt="" />
                          <p className='mx-4'>
                            <h1 className='font-bold italic text-xl'>Address :</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum quod consequatur eum voluptatum! Ipsam dicta dolorum iusto dolores, praesentium rerum qui mollitia adipisci quia.
                          </p>
                    </div>
                    <div className='flex hover:cursor-pointer'>
                          <FiPhoneCall className='h-14 w-14 mx-2'/>
                          <p className='text-xl text-blue-700 mx-2 '>
                            <h1 className='font-bold italic text-xl text-black'>Call us :</h1>
                            +91 98-98-654-210.
                          </p>
                    </div>
                    <div className='flex'>
                    <img className='h-16 w-16 m-2' src="./images/gmail.png" alt="" />
                          <p className='text-xl text-blue-700 m-2'>
                            <h1 className='font-bold italic text-xl text-black'>Email :</h1>
                              <a href="mailto: chainblockers@slrtce.in ">chainblockers@slrtce.in</a> 
                          </p>
                    </div>
              </div> 
            </div>
         </div>
       </div>
       </div>
       <Footer />
    </>
  )
}

export default ContactUs