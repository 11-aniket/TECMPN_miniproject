import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function AddOrphans({ orphans, setOrphans, setIsAdding }) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [yearOfEnroll, setYearOfEnroll] = useState('');
    const [isAdopted, setIsAdopted] = useState('');
    const [org, setOrg] = useState('');
    const [background, setBackground] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!name ||!gender || !dob ||!yearOfEnroll||!isAdopted ||!org||!background) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = orphans.length + 1;
        const newOrphan = {
            id,
            name,
            gender,
            dob,
            yearOfEnroll,
            isAdopted,
            org,
            background
        }
        orphans.push(newOrphan);
        setOrphans(orphans);
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
        <div classname='small-container' >
            <form onSubmit={handleAdd}>
                <h1>Add Orphan</h1>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="gender"> Gender </label>
                <input
                    id="gender"
                    type="text"
                    ref={textInput}
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

export default AddOrphans;