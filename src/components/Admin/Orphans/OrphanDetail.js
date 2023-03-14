import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const OrphanDetail = () => {
  const { id } = useParams();
  const [orphan, setOrphan] = useState(null);
  const [doctorId, setDoctorId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrphan = async () => {
      try {
        const token = localStorage.getItem('token');
        const requestData = {
          "args": {
            "orphanId": `ORP${id}`
          }
        };
        
        console.log('Request Data:', requestData);
        
        const response = await fetch(`http://localhost:8000/channels/oms/chaincodes/orphanage/admin-read-orphan`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body:(requestData)
        });
        const data = await response.json();
        setOrphan(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert('API request failed' , error);
      }
    };

    fetchOrphan();
  }, [id]);

  const grantAccess = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/channels/oms/chaincodes/orphanage/grant-doctor-access?orphanId=ORP${id}&doctorId=OMS-Doc${doctorId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setOrphan(data);
    } catch (error) {
      console.error(error);
      alert('API request failed');
    }
  };

  const revokeAccess = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/channels/oms/chaincodes/orphanage/revoke-doctor-access?orphanId=ORP${id}&doctorId=OMS-Doc${doctorId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setOrphan(data);
    } catch (error) {
      console.error(error);
      alert('API request failed');
    }
  };

  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {isLoading ? (
          <div>
             <p className='text-2xl text-white fixed top-8'>Loading orphan details...</p>
              <div className='mt-2'>
                <FontAwesomeIcon icon={faCircleNotch} spin className='text-white text-6xl fixed top-5 left-40' />
              </div>
            </div>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Orphan ID: {orphan.id}</h2>
                <span className="text-gray-500 text-sm">Gender: {orphan.gender}</span>
              </div>
              <hr className="my-4" />
              <div className="flex flex-col space-y-2">
                <p className="text-md font-medium text-gray-800">Name:</p>
                <p className="text-md font-medium text-gray-600">{orphan.name}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-md font-medium text-gray-800">Date of Birth:</p>
                <p className="text-md font-medium text-gray-600">{orphan.dateOfBirth}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-md font-medium text-gray-800">Year of Enrollment:</p>
                <p className="text-md font-medium text-gray-600">{orphan.year_of_enroll}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-md font-medium text-gray-800">Adoption Status:</p>
                <p className="text-md font-medium text-gray-600">{orphan.adoption_status}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-md font-medium text-gray-800">Background:</p>
                <p className="text-md font-medium text-gray-600">{orphan.background}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-md font-medium text-gray-800">Doctor Access:</p>
                {orphan.doctor_access ? (
                  <button onClick={revokeAccess} className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700">
                    Revoke Access (OMS-Doc{orphan.doctor_access})
                  </button>
                ) : (
                  <div className="flex flex-col items-center">
                    <p className="text-md font-medium text-gray-800">Grant Access to Doctor:</p>
                    <div className="flex items-center">
                      <input type="text" placeholder="Doctor ID" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                      <button onClick={grantAccess} className="rounded-r-md px-4 py-2 bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        Grant Access
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {orphan.permissionGranted && (
                <div className="flex flex-col space-y-2 mt-4">
                  <p className="text-md font-medium text-gray-800">Access Granted to Doctor:</p>
                  <p className="text-md font-medium text-gray-600">OMS-Doc{orphan.permissionGranted}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      </div>  
  );
};

export default OrphanDetail;