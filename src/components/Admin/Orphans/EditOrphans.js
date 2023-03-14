import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EditOrphans({ orphans, selectedOrphan, setOrphans, setIsEditing }) {

    const id = selectedOrphan.id;
    const [name, setName] = useState(selectedOrphan.name);
    const [gender, setGender] = useState(selectedOrphan.gender);
    const [dob, setDob] = useState(selectedOrphan.dob);
    const [yearOfEnroll, setYearOfEnroll] = useState(selectedOrphan.yearOfEnroll);
    const [isAdopted, setIsAdopted] = useState(selectedOrphan.isAdopted);
    const [org, setOrg] = useState(selectedOrphan.setOrg);
    const [background, setBackground] = useState(selectedOrphan.setBackground);

    const handleUpdate = e => {
        e.preventDefault();

        if (!name ||!gender || !dob ||!yearOfEnroll||!isAdopted ||!org||!background) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const orphan = {
            id,
            name,
            gender,
            dob,
            yearOfEnroll,
            isAdopted,
            org,
            background
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
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="gender"> Gender </label>
                <input
                    id="gender"
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                />
                <label htmlFor="dob">Dob</label>
                <input
                    id="dob"
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
                <label htmlFor="yearOfEnroll">YearOfEnroll</label>
                <input
                    id="yearOfEnroll"
                    type="number"
                    name="yearOfEnroll"
                    value={yearOfEnroll}
                    onChange={e => setYearOfEnroll(e.target.value)}
                    />
                <label htmlFor="isAdopted">IsAdopted</label>
                <input
                    id="isAdopted"
                    type="text"
                    name="isAdopted"
                    value={isAdopted}
                    onChange={e => setIsAdopted(e.target.value)}
                />
                <label htmlFor="org">Organisation</label>
                <input
                    id="org"
                    type="text"
                    name="org"
                    value={org}
                    onChange={e => setOrg(e.target.value)}
                />
                <label htmlFor="background">Background</label>
                <input
                    id="background"
                    type="text"
                    name="background"
                    value={background}
                    onChange={e => setBackground(e.target.value)}
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