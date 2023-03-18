import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';


function AddParents({ parents, setParents, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [org, setOrg] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [occupation, setOccupation] = useState('');
    const [isMarried, setIsMarried] = useState('');
    const [references, setReferences] = useState('');
    
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName||!lastName||!org||!address||!phoneNo||!occupation||!isMarried||!references) {
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
            firstName,
            lastName,
            org,
            address,
            phoneNo,
            occupation,
            isMarried,
            references
        }
        parents.push(newParent);
        setParents(parents);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className='small-container'>
            <form  onSubmit={handleAdd}>
                <h1 className='flex  h-14  flex-wrap md:justify-between justify-between  fixed  top-0 z-10  border-gray-200 px-2  text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer bg-gray-900 text-white w-full'>Add Parent</h1>
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
                <label htmlFor="org">Organisation</label>
                <input
                    id="org"
                    type="text"
                    name="org"
                    value={org}
                    onChange={e => setOrg(e.target.value)}
                    />
                <label htmlFor="address"> Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="phoneNo">PhoneNo</label>
                <input
                    id="phoneNo"
                    type="number"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={e => setPhoneNo(e.target.value)}
                    />
                <label htmlFor="occupation">Occupation</label>
                <input
                    id="occupation"
                    type="text"
                    name="occupation"
                    value={occupation}
                    onChange={e => setOccupation(e.target.value)}
                    />
                <label htmlFor="isMarried">IsMarried</label>
                <input
                    id="isMarried"
                    type="text"
                    name="isMarried"
                    value={isMarried}
                    onChange={e => setIsMarried(e.target.value)}
                    />
                <label htmlFor="references">References</label>
                <input
                    id="references"
                    type="text"
                    name="references"
                    value={references}
                    onChange={e => setReferences(e.target.value)}
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