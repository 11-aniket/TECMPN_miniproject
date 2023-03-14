import React from 'react'
function ListParents({ parents, handleEdit, handleDelete }) {

    

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Organisation</th>
                        <th>Address</th>
                        <th>Phone No</th>
                        <th>Occupation</th>
                        <th>IsMarried</th>
                        <th>References</th>
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
                                <td>{parent.firstName}</td>
                                <td>{parent.lastName}</td>
                                <td>{parent.org}</td>
                                <td>{parent.address}</td>
                                <td>{parent.phoneNo}</td>
                                <td>{parent.occupation}</td>
                                <td>{parent.isMarried}</td>
                                <td>{parent.references}</td>
                              
                                <td className="text-right">
                                    <button3 
                                        onClick={() => handleEdit(parent.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button3>
                                </td>
                                <td className="text-left">
                                    <button3
                                        onClick={() => handleDelete(parent.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button3>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Parents</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListParents;