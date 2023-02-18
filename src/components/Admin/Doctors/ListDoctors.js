import React from 'react'

function ListDoctors({ doctors, handleEdit, handleDelete }) {
    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone No</th>
                        <th>Address</th>
                        <th>Speciality</th>
                        <th>Qualification</th>
                        <th>Experience_In_Years</th>
                        <th>Awards</th>
                        <th>Clinic_Address</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.length > 0 ? (
                        doctors.map((doctor, i) => (
                            <tr key={doctor.id}>
                                <td>{i + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.age}</td>
                                <td>{doctor.phoneno}</td>
                                <td>{doctor.address} </td>
                                <td>{doctor.speciality} </td>
                                <td>{doctor.qualification} </td>
                                <td>{doctor.experience_in_years} </td>
                                <td>{doctor.awards} </td>
                                <td>{doctor.clinic_address} </td>

                                <td className="text-right">
                                    <button2
                                        onClick={() => handleEdit(doctor.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button2>
                                </td>
                                <td className="text-left">
                                    <button2
                                        onClick={() => handleDelete(doctor.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button2>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Doctors</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListDoctors;