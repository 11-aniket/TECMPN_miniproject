import React from 'react'

function ListOrphans({ orphans, handleEdit, handleDelete }) {
   

    

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Date Of Birth</th>
                        <th>YearOfEnroll</th>
                        <th>Is Adopted?</th>
                        <th>Organisation</th>
                        <th>Background</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orphans.length > 0 ? (
                        orphans.map((orphan, i) => (
                            <tr key={orphan.id}>
                                <td>{i + 1}</td>
                                <td>{orphan.name}</td>
                                <td>{orphan.gender}</td>
                                <td>{orphan.dob}</td>
                                <td>{orphan.yearOfEnroll}</td>
                                <td>{orphan.isAdopted} </td>
                                <td>{orphan.org}</td>
                                <td>{orphan.background}</td>
                                
                                <td className="text-right">
                                    <button 
                                        onClick={() => handleEdit(orphan.id)} 
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(orphan.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Orphans</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListOrphans;