import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import ListOrphans from '../Orphans/ListOrphans';
import AddOrphans from './AddOrphans';
import HeaderOrphans from './HeaderOrphans';

function OrphanDashboard() {

    const [orphans, setOrphans] = useState(() =>{
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8000/channels/oms/chaincodes/orphanage/admin-queryall-orphan', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setOrphans(response.data);
                console.log("Edit page : ", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });
    const [isAdding, setIsAdding] = useState(false);

    console.log("OrphansData : " , orphans);

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

                setOrphans(orphans.result.filter(orphan => orphan.id !== id));
            }
        });
    }



    return (
        <div className="container">
          {/* List */}
          {!isAdding  && (
            <>
              <HeaderOrphans setIsAdding={setIsAdding} />
              <ListOrphans
                orphans={orphans}
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
        </div>
      );      
}

export default OrphanDashboard;