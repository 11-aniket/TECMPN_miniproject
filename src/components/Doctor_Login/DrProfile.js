import React, { useState, useEffect } from 'react';
import DrNavbar from './DrNavbar';
import axios from 'axios';
import jwt_decode from "jwt-decode";

const DrProfile = () => {
  const [doctorData, setDoctorData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    if (decoded.token.role === "Doctor") {
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.get('http://localhost:8000/channels/oms/chaincodes/orphanage/admin-queryall-doctor', { headers });
        const doctors = response.data;
        const filteredDoctor = doctors.filter((doctor) => doctor.id === decoded.token.id);
        setDoctorData(filteredDoctor[0]);
        console.log(filteredDoctor[0]);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Forbidden</div>;
  }

  return (
    <div className='bg-gradient-to-r from-indigo-400 to-purple-400 h-screen'>
    <DrNavbar />
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 max-w-sm mx-auto my-10 p-10 bg-white rounded-xl shadow-lg border-4 border-gray-800">
      <p className="text-gray-600 mb-4 font-medium text-center ">
        Doctor ID: {doctorData.id}
      </p>
      <img
        className="w-full h-64 object-cover object-center rounded-t-lg p-2 border-4 border-gray-800"
        src={doctorData.imageUrl || 'https://via.placeholder.com/400x300'}
        alt="Doctor's Profile"
      />
      <div className="mt-6 text-lg ">
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          {doctorData.name || 'Dr. John Doe'}
        </h2>
        <p className="text-gray-800 font-medium mt-2 text-justify"> 
        Role: {doctorData.specialization || 'Orthopedic Surgeon'}
        </p>
        <p className="text-gray-800 font-medium text-justify mt-2"> 
          Organization: {doctorData.organization || 'ABC Hospital'}
        </p>
        <p className="text-gray-800 font-medium text-justify mt-2"> 
          Phone: {doctorData.phone || '(123) 456-7890'}
        </p>
        <div className="mt-6 text-center">
          <p className="text-gray-900 inline-block bg-gray-200 rounded-full px-3 py-1 mr-2">
            Years of Experience: {doctorData.experience || '10'}
          </p>
          <p className="text-gray-900 mt-2 inline-block bg-gray-200 rounded-full px-3 py-1">
            Specialties: {doctorData.specialties || 'Hip and Knee Surgery'}
          </p>
        </div>
      </div>
    </div>

  </div>
  );
};

export default DrProfile;
