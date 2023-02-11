import React, { useState } from 'react'
import Side_nav from '../SideNav'
import doctor from '../Api/DoctorApi'
import DoctorCard from './DoctorCard'
import DoctorNavbar from './DoctorNavbar'
import { TiUserAdd, TiUserDelete } from 'react-icons/ti'

const uniqueList = [
    ...new Set(
        doctor.map((curElem)=>{
            return curElem.specialization;
        }) 
    ),
    "General"
];

const Doctor_Details = () => {

     const [doctorData,setDoctorData] = useState(doctor);
    const [doctorlist, setDoctorlist] = useState(uniqueList);
    
    const filterItem = (specialization) => {

        if(specialization === "General"){
            setDoctorData(doctor);
            return;
        }

        const updatedList = doctor.filter((curElem) => {
            return curElem.specialization === specialization;
        });
        setDoctorData(updatedList);
    };
  return (
    <>
    <Side_nav/>
    <div className='mt-12 ml-3 md:mt-0 md:absolute left-72 top-24 border-solid border-2 border-black inline-flex w-9/12'>
        <div className='font-extrabold text-3xl italic hover:underline'>
            Doctor Details
        </div>
        <div className=' py-3 font-bold sm: text-sm md:text-base flex absolute right-[2%]'>
                <TiUserAdd className='w-9 h-7 -mt-1'/>
                <a className='ml-1 mr-8' href="">Add New Doctor</a>
                <TiUserDelete className='w-8 h-7 -mt-1'/>
                <a className='ml-1' href="">Delete Doctor</a>
            </div>
        {/* <doctorNavbar filterItem={filterItem} doctorlist={doctorlist} /> */}
        <DoctorNavbar filterItem={filterItem} doctorlist={doctorlist} />
        <div className=' sm:pt-10 md:pt-0 absolute left-6 top-36 w-11/12'>
            < DoctorCard doctorData={doctorData} />
        </div>
    </div>
    </>
  );
}

export default Doctor_Details


{
/*
 */}