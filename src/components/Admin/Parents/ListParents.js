import React from 'react'
function ListParents({ parents, handleEdit, handleDelete }) {

    

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone No</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {parents.length > 0 ? (
                        parents.map((parent, i) => (
                            <tr key={parent.id}>
                                <td>{i + 1}</td>
                                <td>{parent.name}</td>
                                <td>{parent.age}</td>
                                <td>{parent.phoneno}</td>
                                <td>{parent.email}</td>
                              
                                <td>{parent.address} </td>
                                <td className="text-right">
                                    <button 
                                        onClick={() => handleEdit(parent.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(parent.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListParents;