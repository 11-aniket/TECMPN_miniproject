import React, { useState } from 'react'
import Swal from 'sweetalert2';
import orphansData from '../Api/orphansData';
import ListOrphans from '../Orphans/ListOrphans';
import AddOrphans from './AddOrphans';
import EditOrphans from './EditOrphans';
import HeaderOrphans from './HeaderOrphans';

function OrphanDashboard() {

    const [orphans, setOrphans] = useState(orphansData);
    const [selectedOrphan, setSelectedOrphan] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [orphan] = orphans.filter(orphan=> orphan.id === id);

        setSelectedOrphan(orphan);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [orphan] = orphans.filter(orphan => orphan.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${orphan.name}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setOrphans(orphans.filter(orphan => orphan.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <HeaderOrphans
                        setIsAdding={setIsAdding}
                    />
                    <ListOrphans
                       orphans={orphans}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <AddOrphans
                    orphans={orphans}
                    setOrphans={setOrphans}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <EditOrphans
                    orphans={orphans}
                    selectedOrphan={selectedOrphan}
                    setOrphans={setOrphans}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default OrphanDashboard;