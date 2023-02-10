import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function AddDoctors({ doctors, setDoctors, setIsAdding }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phoneno, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [qualification, setQualification] = useState('');
    const [experience_in_years, setExperience_In_Years] = useState('');
    const [awards, setAwards] = useState('');
    const [clinic_address, setClinic_Address] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!name || !age ||!phoneno || !address||!speciality||!qualification||!experience_in_years||!awards||!clinic_address) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = doctors.length + 1;
        const newDoctor = {
            id,
            name,
            age,
            phoneno,
            address,
            speciality,
            qualification,
            experience_in_years,
            awards,
            clinic_address
        }
        doctors.push(newDoctor);
        setDoctors(doctors);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Doctor</h1>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />

                <label htmlFor="phoneno">PhoneNo</label>
                <input
                    id="PhoneNo"
                    type="number"
                    name="PhoneNo"
                    value={phoneno}
                    onChange={e => setPhoneNo(e.target.value)}
                    />

                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
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

                <label htmlFor="experience_in_years">Experience_In_Years</label>
                <input
                    id="experience_in_years"
                    type="number"
                    name="experience_in_years"
                    value={experience_in_years}
                    onChange={e => setExperience_In_Years(e.target.value)}
                />

                <label htmlFor="awards">Awards</label>
                <input
                    id="awards"
                    type="text"
                    name="awards"
                    value={awards}
                    onChange={e => setAwards(e.target.value)}
                />

                <label htmlFor="clinic_address">Clinic_Address</label>
                <input
                    id="clinic_address"
                    type="text"
                    name="clinic_address"
                    value={clinic_address}
                    onChange={e => setClinic_Address(e.target.value)}
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