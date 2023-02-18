import React, { useState } from 'react'
import Side_nav from '../SideNav'
import parentt from '../Api/ParentApi'
import ParentNavbar from './ParentNavbar'
import ParenttCard from './ParentCard'
import { TiUserAdd, TiUserDelete } from 'react-icons/ti'

const uniqueList = [
    ...new Set(
        parentt.map((curElem)=>{
            return curElem.role;
        }) 
    ),
    "All"
];

const Parentt_Details = () => {

    const [parenttData,setParenttData] = useState(parentt);
    const [parenttlist, setParenttlist] = useState(uniqueList);
    
    const filterItem = (role) => {

        if(role === "All"){
            setParenttData(parentt);
            return;
        }

        const updatedList = parentt.filter((curElem) => {
            return curElem.role === role;
        });
        setParenttData(updatedList);
    };
  return (
    <>
    <Side_nav/>
    <div className='mt-12 ml-3 md:mt-0 md:absolute left-72 top-24 border-solid border-2 border-black inline-flex w-9/12'>
        <div className='font-extrabold text-3xl italic hover:underline'>
            Parent Details
        </div>
        <div className=' py-3 font-bold sm: text-sm md:text-base flex absolute right-[2%]'>
                <TiUserAdd className='w-9 h-7 -mt-1'/>
                <a className='ml-1 mr-8' href="../AddParents">Add New Parent</a>
                <TiUserDelete className='w-8 h-7 -mt-1'/>
                <a className='ml-1' href="../ParentDashboard">Delete Parent</a>
            </div>
        <ParentNavbar filterItem={filterItem} parenttlist = {parenttlist} />
        <div className=' sm:pt-10 md:pt-0 absolute left-6 top-36 w-11/12'>
            < ParenttCard parenttData={parenttData} />
        </div>
    </div>
    </>
  );
}

export default Parentt_Details


{
/*
 */}