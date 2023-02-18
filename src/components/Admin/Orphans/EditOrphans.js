import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EditOrphans({ orphans, selectedOrphan, setOrphans, setIsEditing }) {

    const id = selectedOrphan.id;
    // const [image, setImage] = useState(selectedOrphan.image);
    const [name, setName] = useState(selectedOrphan.name);
    const [age, setAge] = useState(selectedOrphan.age);
    const [year_of_enroll, setYear_Of_Enroll] = useState(selectedOrphan.year_of_enroll);
    const [adoption_status, setAdoption_Status] = useState(selectedOrphan.adoption_status);

    
    
    const handleUpdate = e => {
        e.preventDefault();

        if (/*!image||*/!name || !age ||!year_of_enroll||!adoption_status) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const orphan = {
            id,
            // image,
            name,
            age,
            year_of_enroll,
            adoption_status
           
        };

        for (let i = 0; i < orphans.length; i++) {
            if (orphans[i].id === id) {
                orphans.splice(i, 1, orphan);
                break;
            }
        }

        setOrphans(orphans);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${orphan.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Orphan</h1>
                {/* <label htmlFor="image"> Image </label>
                <input
                    id="image"
                    type="file"
                    name="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                /> */}

                <label htmlFor="name"> Name </label>
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

                <label htmlFor="year_of_enroll">Year_Of_Enroll</label>
                <input
                    id="year_of_enroll"
                    type="number"
                    name="year_of_enroll"
                    value={year_of_enroll}
                    onChange={e => setYear_Of_Enroll(e.target.value)}
                    />

                <label htmlFor="adoption_status">Adoption_Status</label>
                <input
                    id="adoption_status"
                    type="text"
                    name="adoption_status"
                    value={adoption_status}
                    onChange={e => setAdoption_Status(e.target.value)}
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

export default EditOrphans;