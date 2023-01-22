import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate();
    const navigateSignUp = () => {
        navigate('/signup');
    };
    const navigatenewHome = () => {
        navigate('/childgallery');
    };
  return (
    <>
        <div className="relative w-full h-screen justify-center  bg-gray-900/80 ">
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src="../images/login.jpg" alt="" />
            <div className='flex justify-center items-center h-full'>
                <form action="" className='max-w-[500px] w-full mx-auto bg-white p-8 rounded-2xl'>
                    <h2 className='text-4xl font-bold text-center py-4 border-x-8'>Orphan Foundation Center</h2>
                    <hr/>
                    <div className='flex justify-between py-8 '>
                        <p className='border shadow-lg hover:shadow-3xl border-black px-6 py-2 relative flex items-center hover:bg-slate-300 rounded-lg font-semibold '><FcGoogle className='mr-2'/> Google</p>
                        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center border-black hover:bg-slate-300 rounded-lg font-semibold'>< SiFacebook className='mr-2'/> Facebook</p>
                    </div>
                    <div className='flex flex-col mb-4 '>
                        <label>Username</label>
                        <input className='border relative bg-gray-200 p-2' type="text"/>
                    </div>
                    <div className='flex flex-col mb-4 '>
                        <label>Password</label>
                        <input className='border relative bg-gray-200 p-2' type="password"/>
                    </div>
                    <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-800 relative text-white rounded-3xl' onClick={navigatenewHome}>Sign In </button>
                    {/* <p className='ml-10 flex items-center mt-3'><input className='mr-2' type="checkbox" />Remember Me</p> */}
                    <p className=' text-center relative w-full hover:underline cursor-pointer mt-2 hover:bg-slate-400 rounded-lg' onClick={navigateSignUp}>Not a Member? Sign UP now</p>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignIn