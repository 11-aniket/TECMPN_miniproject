import React from 'react'

function ListOrphans({ orphans, handleEdit, handleDelete }) {
   

    

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Year_Of_Enroll</th>
                        <th>Adoption_Status</th>
                        
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
                                <td>{orphan.image}</td>
                                <td>{orphan.name}</td>
                                <td>{orphan.age}</td>
                                <td>{orphan.year_of_enroll}</td>
                                <td>{orphan.adoption_status} </td>
                                
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