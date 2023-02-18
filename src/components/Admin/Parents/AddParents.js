import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function AddParents({ parents, setParents, setIsAdding }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phoneno, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!name || !age ||!phoneno || !email || !address) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = parents.length + 1;
        const newParent = {
            id,
            name,
            age,
            phoneno,
            email,
            address
        }
        parents.push(newParent);
        setParents(parents);
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
                <h1 className='Add'>Add Parent</h1>
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

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
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

export default AddParents