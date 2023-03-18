import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const OrphanDetail = () => {
  const { id } = useParams();
  const [orphan, setOrphan] = useState({});
  const [doctorId, setDoctorId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOrphan();
  },[]);

  const fetchOrphan = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/channels/oms/chaincodes/orphanage/admin-read-orphan?`+ new URLSearchParams({
        orphanId:id,
      }), {
        method: "GET",
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      if(response.status === 200){
      const data = await response.json();
      console.log(data);
      setOrphan(data);
      setDoctorId(data.result.permissionGranted[0]);
      console.log(data);
      setIsLoading(false);
    }
    } catch (error) {
      console.error(error);
      alert('API request failed' , error);
    }
  };

  
  const grantAccess = async () => {
    const args = {
      orphanId: orphan.result.id,
      doctorId: doctorId || "",
    };
  
    try {
      const token = localStorage.getItem("token");
      console.log(args);
      const response = await fetch(
        "http://localhost:8000/channels/oms/chaincodes/orphanage/admin-grantaccess-orphan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(args),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setOrphan(data);
      }
    } catch (error) {
      console.error(error);
      alert("API request failed");
    }
  };
  
  const revokeAccess = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/channels/oms/chaincodes/orphanage/admin-revokeaccess-orphan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          orphanId : orphan.result.id,
          doctorId : doctorId
        })
      });
      if(response.status === 200){
      const data = await response.json();
      setOrphan(data);
      }
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
                <h2 className="text-xl font-bold text-gray-800">Orphan ID: {orphan.result.id || 1}</h2>
                <div className="bg-white shadow-md rounded-lg px-6 py-4">
  <table>
    <tbody>
      <tr>
        <td className="text-md font-medium text-gray-800">Name:</td>
        <td className="text-md font-medium text-gray-600">{orphan.result.name}</td>
      </tr>
      <tr>
        <td className="text-md font-medium text-gray-800">Date of Birth:</td>
        <td className="text-md font-medium text-gray-600">{orphan.result.dob}</td>
      </tr>
      <tr>
        <td className="text-md font-medium text-gray-800">Year of Enrollment:</td>
        <td className="text-md font-medium text-gray-600">{orphan.result.yearOfEnroll}</td>
      </tr>
      <tr>
        <td className="text-md font-medium text-gray-800">Adoption Status:</td>
        <td className="text-md font-medium text-gray-600">{orphan.result.isAdopted == true ? "Adopted" : "UnAdopted"}</td>
      </tr>
      <tr>
        <td className="text-md font-medium text-gray-800">Background:</td>
        <td className="text-md font-medium text-gray-600">{orphan.result.background}</td>
      </tr>
      <tr>
        <td className="text-md font-medium text-gray-800">Doctor Access:</td>
        <td>
          {orphan.result.permissionGranted.length > 0 ? (
          <button onClick={revokeAccess} className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700">
            Revoke Access ({orphan.result.permissionGranted[0]})
          </button>
          ) : (
          <div className="flex items-center space-x-2">
          <input type="text" placeholder="Doctor ID" value={doctorId} onChange={(e) => {
              console.log(e.target.value); 
              setDoctorId(e.target.value);
            }} className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            <button onClick={grantAccess} className="rounded-r-md px-4 py-2 bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                          Grant Access
            </button>
          </div>
        )}
      </td>
    </tr>
        {orphan.permissionGranted && (
          <tr>
            <td className="text-md font-medium text-gray-800">Access Granted to Doctor:</td>
            <td className="text-md font-medium text-gray-600">OMS-Doc{orphan.result.permissionGranted}</td>
          </tr>
       )}
    </tbody>
 </table>
</div>
</div>
    </>
  )}
</div>
      </div>  
  );
};

export default OrphanDetail;