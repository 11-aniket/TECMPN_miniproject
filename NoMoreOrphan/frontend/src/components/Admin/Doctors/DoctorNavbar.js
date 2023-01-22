import React from 'react'

const DoctorNavbar = ({filterItem,doctorlist}) => {
    return (
        <>
        <nav className='sm:mt-10 md:mt-0 absolute left-8 top-20 border-solid border-2 border-black rounded-2xl bg-slate-500 w-11/12 '>
            <div className=" ml-10 space-x-16 p-2 text-2xl justify-center items-center">
                {doctorlist.map((curElem)=>{
                    return (
                        <button 
                            className='p-0 m-0 hover:underline' 
                            onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    );
                    })}
                </div>
            </nav>
        </>
    );
}

export default DoctorNavbar