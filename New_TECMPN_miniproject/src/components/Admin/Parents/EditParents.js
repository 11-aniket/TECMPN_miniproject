import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EditParents({ parents, selectedParent, setParents, setIsEditing }) {

    const id = selectedParent.id;

    const [name, setName] = useState(selectedParent.name);
    const [age, setAge] = useState(selectedParent.age);
    const [phoneno, setPhoneNo] = useState(selectedParent.phoneno);
    const [email, setEmail] = useState(selectedParent.email);
    const [address, setAddress] = useState(selectedParent.address);
    
    const handleUpdate = e => {
        e.preventDefault();

        if (!name || !age || !phoneno || !email || !address) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const parent = {
            id,
            name,
            age,
            phoneno,
            email,
            address
           
        };

        for (let i = 0; i < parents.length; i++) {
            if (parents[i].id === id) {
                parents.splice(i, 1, parent);
                break;
            }
        }

        setParents(parents);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${parent.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Parent</h1>
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

export default EditParents;