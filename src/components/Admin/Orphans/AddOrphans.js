import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function AddOrphans({ orphans, setOrphans, setIsAdding }) {
    /*const [image, setImage] = useState('');*/
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [year_of_enroll, setYear_Of_Enroll] = useState('');
    const [adoption_status, setAdoption_Status] = useState('');
    

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (/*!image||*/!name || !age ||!year_of_enroll||!adoption_status) {
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
            /*image,*/
            name,
            age,
            year_of_enroll,
            adoption_status
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
        <div className="small-container">
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