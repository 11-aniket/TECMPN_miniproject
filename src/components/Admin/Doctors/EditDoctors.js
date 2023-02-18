import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EditDoctors({ doctors, selectedDoctor, setDoctors, setIsEditing }) {

    const id = selectedDoctor.id;

    const [name, setName] = useState(selectedDoctor.name);
    const [age, setAge] = useState(selectedDoctor.age);
    const [phoneno, setPhoneNo] = useState(selectedDoctor.phoneno);
    const [address, setAddress] = useState(selectedDoctor.address);
    const [speciality, setSpeciality] = useState(selectedDoctor.speciality);
    const [qualification, setQualification] = useState(selectedDoctor.qualification);
    const [experience_in_years, setExperience_In_Years] = useState(selectedDoctor.experience_in_years);
    const [awards, setAwards] = useState(selectedDoctor.awards);
    const [clinic_address, setClinic_Address] = useState(selectedDoctor.clinic_address);
    
    const handleUpdate = e => {
        e.preventDefault();

        if (!name || !age ||!phoneno || !address||!speciality||!qualification||!experience_in_years||!awards||!clinic_address) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const doctor = {
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
                <label htmlFor="firstName">Name</label>
                <input
                    id="name"
                    type="text"
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