import React from 'react'
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
                    
                    <div className='flex flex-col mb-4 '>
                        <label>Username</label>
                        <input className='border relative bg-gray-200 p-2' type="text"/>
                    </div>
                    <div className='flex flex-col mb-4 '>
                        <label>Password</label>
                        <input className='border relative bg-gray-200 p-2' type="password"/>
                    </div>
                    <div>
                        <label>Select Role</label>
                        <div className="relative w-full flex flex-col mb-4">
                        <select className="w-full p-2 text-black bg-gray-200 border rounded-md shadow-sm hover:border hover:border-black ">
                            <option>User</option>
                            <option>Admin</option>
                            <option>Doctor</option>
                            <option>Parent</option>
                        </select>
                     </div>
                    </div>
                    <div>
                        <label>Select Organization</label>
                        <div className="relative w-full flex flex-col mb-4">
                        <select className="w-full p-2 text-black bg-gray-200 border rounded-md shadow-sm hover:border hover:border-black ">
                            <option>Organization_1</option>
                            <option>Organization_2</option>
                        </select>
                     </div>
                    </div>
                    
                    <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-800 relative text-white rounded-3xl' onClick={navigatenewHome}>Sign In </button>
                </form>
            </div>
       </div>
   
    </>
  )
}

export default SignIn