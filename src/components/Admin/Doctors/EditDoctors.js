import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EditDoctors({ doctors, selectedDoctor, setDoctors, setIsEditing }) {

    const id = selectedDoctor.id;

    const [firstName, setFirstName] = useState(selectedDoctor.firstName);
    const [lastName, setLastName] = useState(selectedDoctor.lastName);
    const [age, setAge] = useState(selectedDoctor.age);
    const [org, setOrg] = useState(selectedDoctor.org);
    const [speciality, setSpeciality] = useState(selectedDoctor.speciality);
    const [qualification, setQualification] = useState(selectedDoctor.qualification);
    const [experience, setExperience] = useState(selectedDoctor.experience);
    const [phoneNo, setPhoneNo] = useState(selectedDoctor.phoneNo);
    const [personalAddress, setPersonalAddress] = useState(selectedDoctor.personalAddress);
   
    
    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !age || !org ||!speciality||!qualification||!experience||!phoneNo || !personalAddress) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const doctor = {
            id,
            firstName,
            lastName,
            age,
            org,
            speciality,
            qualification,
            experience,
            phoneNo,
            personalAddress
           
        };

        for (let i = 0; i < doctors.length; i++) {
            if (doctors[i].id === id) {
                doctors.splice(i, 1, doctor);
                break;
            }
        }

        setDoctors(doctors);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${doctor.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Doctor</h1>
                 <label htmlFor="firstName"> FirstName </label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName"> LastName </label>
                <input
                    id="lastName"
                    type="text"
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
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default EditDoctors;