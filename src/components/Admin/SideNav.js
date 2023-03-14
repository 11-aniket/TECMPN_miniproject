import React from 'react'
import { useState , useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'

function Sidenav() {
  const Links = [
    { name: "Home", link: "/admin" },
    { name: "Photo Gallery", link: "/photogallery" },
    { name: "Missions", link: "/missions" },
    { name: "News Letter", link: "/newsletter" },
    { name: "Feedback", link: "/feedback" },
    { name: "Doctors", link: "/doctors" },
    { name: "Parents", link: "/parent_details" },
    
  ];
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    window.history.pushState(null, null, '/');
    navigate('/signin');
  };

   useEffect(() => {
     const isLoggedIn = localStorage.getItem('token');
     if (!isLoggedIn) {
      navigate('/signin');
    }
   }, [navigate]);

  return (
    <>
      <topnav className="fixed flex top-0 z-10 w-screen text-white border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 mx-1 rounded-2xl">
        <div className="mr-3 h-6 sm:h-9 container flex-wrap md:justify-between justify-between mx-auto">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">Orphanage Foundation Center</span>
        </div>
        <div onClick={() => setOpen(!open)}
          className="h-5 mr-3 w-6 cursor-pointer md:hidden">
          <img src={open ? "../images/cancel.png" : "../images/menu.png"} alt="" />
        </div>
      </topnav>
      <sidenav className={`md:flex md:items-center md:space-x-5 md:py-0 pb-8 md:px-0 px-5 flex m-4 py-6 absolute md:static md:z-auto z-[4] md:mt-16 md:w-2/5 left-0 top-0 md:my-0 my-14 md:mx-0 mx-1 w-fit transition-all duration-500 ease-in rounded-2xl ${open ? 'top-0' : '-top-[1000px]'}`}>
        <div className='flex flex-col cursor-pointer sm:text-white sm:bg-slate-600 md:bg-white md:text-black font-semibold md:w-2/5 sm:w-1/2 mx-4 space-y-3 py-5'>
         <div> 
          <ul className='space-y-3'>
            {Links.map((link) => (
              <li key={link.name} className='hover:border-solid hover:border-2 hover:border-gray-500 w-fit md:m-2 text-xl md:pr-8 '>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-80'>
          <button className="bg-red-500 text-white py-2 px-4  rounded-xl w-3/5" onClick={handleLogout}>
             Logout
          </button>
        </div>
        </div>
        <div class="absolute left-56 top-16 h-screen w-0.5 md:bg-gray-600 lg:bg-gray-600 bg-white"></div>
      </sidenav>
    </>
  )
}

export default Sidenav
