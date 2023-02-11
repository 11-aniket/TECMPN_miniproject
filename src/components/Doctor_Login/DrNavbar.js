import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DrNavbar() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/');
  };

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closeProfile = () => {
    setProfileOpen(false);
  };

  let Links = [
    { name: 'Profile', link: '/drhome' },
    { name: 'Orphans Details', link: '/orphanUMe' },
  ];

  return (
    <>
      <topnav
        className="static flex top-0 z-10 min-w-min bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 mx-1 rounded-2xl0 "
        onClick={closeProfile}
      >
        <div className=" mr-3 sm:h-9 container md:justify-between justify-between mx-auto">
          <span className="self-center text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer">
            Orphanage Foundation Center
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="h-5 mr-3 w-6 cursor-pointer md:hidden"
        >
          <img
            src={open ? '../images/cancel.png' : '../images/menu.png'}
            alt=""
          />
        </div>
      </topnav>
      <sidenav
        className={`md:flex md:items-center md:space-x-5 md:py-0 pb-8 md:px-0 px-5 flex m-4 py-6 absolute md:static md:z-auto z-[4] md:w-3/5 left-0 top-0 md:my-0 my-14 md:mx-0 mx-1 w-fit transition-all duration-500 ease-in rounded-2xl ${
          open ? 'top-0' : '-top-[1000px]'
        }`}
      >
        <div
          className='flex flex-col cursor-pointer sm:text-white sm:bg-slate-600 md:bg-white md:text-black font-semibold md:w-1/4 mx-2 sm:w-1/2 space-y-3 gap-y-96'
        >
          <ul className='space-y-3'>
            {Links.map((link) => (
              <li
                key={link.name}
                className='hover:border-solid hover:border-2 hover:border-gray-500 md:m-2 text-xl '
              >
                <Link
                  to={link.link}
                  onClick={() => setProfileOpen(true)}
                >
                  {link.name}
                </Link>
              </li>
          ))
        }
      </ul>

      <button className=" ml-2 relative w-32 text-lg hover:text-xl font-semibold whitespace-nowrap dark:text-gray-800 bg-gray-400 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-700 transform transition duration-500 hover:scale-110 hover:text-white" onClick={navigateLogin}>
        Log-Out
      </button>
  </div>
  <div class=" absolute left-56 top-16 h-5/6 w-0.5 md:bg-gray-600 lg:bg-gray-600 bg-white"></div>
</sidenav>
</>)
}

export default DrNavbar