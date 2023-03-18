import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

function AddDoctors({ doctors, setDoctors, setIsAdding }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [org, setOrg] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [personalAddress, setPersonalAddress] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !age ||
      !org ||
      !speciality ||
      !qualification ||
      !experience ||
      !phoneNo ||
      !personalAddress
    ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    try {
      const response = await axios.post('/api/doctors', {
        firstName,
        lastName,
        age,
        org,
        speciality,
        qualification,
        experience,
        phoneNo,
        personalAddress,
      });

      const newDoctor = response.data;
      setDoctors([...doctors, newDoctor]);
      setIsAdding(false);

      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${firstName}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to add the doctor. Please try again later.',
        showConfirmButton: true,
      });
    }
  };


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1 className='flex  h-14  flex-wrap md:justify-between justify-between  fixed  top-0 z-10  border-gray-200 px-2  text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer bg-gray-900 text-white w-full'>Add Doctor</h1>
                <label className='mt-20' htmlFor="firstName"> FirstName </label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName"> LastName </label>
                <input
                    id="lastName"
                    type="text"
                    ref={textInput}
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />

                <label htmlFor="org">Organisation</label>
                <input
                    id="org"
                    type="text"
                    name="org"
                    value={org}
                    onChange={e => setOrg(e.target.value)}
                    />
                
                <label htmlFor="speciality">Speciality</label>
                <input
                    id="speciality"
                    type="text"
                    name="speciality"
                    value={speciality}
                    onChange={e => setSpeciality(e.target.value)}
                />

                
                <label htmlFor="qualification">Qualification</label>
                <input
                    id="qualification"
                    type="text"
                    name="qualification"
                    value={qualification}
                    onChange={e => setQualification(e.target.value)}
                />

                <label htmlFor="experience">Experience</label>
                <input
                    id="experience"
                    type="number"
                    name="experience"
                    value={experience}
                    onChange={e => setExperience(e.target.value)}
                />

                <label htmlFor="phoneNo">PhoneNo</label>
                <input
                    id="phoneNo"
                    type="number"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={e => setPhoneNo(e.target.value)}
                    />

                <label htmlFor="personalAddress">Personal Address</label>
                <input
                    id="personalAddress"
                    type="text"
                    name="personalAddress"
                    value={personalAddress}
                    onChange={e => setPersonalAddress(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default AddDoctors;