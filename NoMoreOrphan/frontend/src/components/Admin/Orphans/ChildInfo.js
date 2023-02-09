import React, { useState } from 'react'
import Sidenav from '../SideNav'
import orphan from '../Api/OrphanApi'
import Orphannavbar from './OrphanNavbar'
import OrphanCard from './OrphanCard'
import { TiUserAdd, TiUserDelete } from 'react-icons/ti'

const uniqueList = [
    ...new Set(
        orphan.map((curElem)=>{
            return curElem.adoption_status;
        }) 
    ),
    "All"
];

const OrphanDetails = () => {

    const [orphanData,setOrphanData] = useState(orphan);
    const [orphanlist, setOrphanlist] = useState(uniqueList);
    
    const filterItem = (adoption_status) => {

        if(adoption_status === "All"){
            setOrphanData(orphan);
            return;
        }

        const updatedList = orphan.filter((curElem) => {
            return curElem.adoption_status === adoption_status;
        });
        setOrphanData(updatedList);
    };
  return (
    <>
    <Sidenav/>
    <div className='mt-12 ml-3 md:mt-0 md:absolute left-72 top-24 border-solid border-2 border-black inline-flex w-9/12'>
        <div className='font-extrabold text-3xl italic hover:underline'>
            Orphan Details
        </div>
        <div className=' py-3 font-bold sm: text-sm md:text-base flex absolute right-[2%]'>
                <TiUserAdd className='w-9 h-7 -mt-1'/>
                <a className='ml-1 mr-8' href="">Add New Orphan</a>
                <TiUserDelete className='w-8 h-7 -mt-1'/>
                <a className='ml-1' href="">Delete Orphan</a>
            </div>
        <Orphannavbar filterItem={filterItem} orphanlist={orphanlist} />
        <div className=' sm:pt-10 md:pt-0 absolute left-6 top-36 w-11/12'>
            < OrphanCard orphanData={orphanData} />
        </div>
    </div>
    </>
  );
}

export default OrphanDetails


{
/*
 */}