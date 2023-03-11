import React, { useState, useEffect } from 'react';
import DrNavbar from './DrNavbar';
import axios from 'axios';
import jwt_decode from "jwt-decode";

const DrProfile = () => {
  const [doctorData, setDoctorData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token)
    if(decoded.token.role == "Doctor"){
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('<API_URL>');
        setDoctorData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    {isAuthenticated ? (<> 
      <div>
        <DrNavbar />
        <div className=" fixed top-16 left-1/2 max-w-sm mx-auto my-10 p-10 bg-white rounded-lg shadow-lg">
          <img className="w-full h-64 object-cover object-center"
            src={doctorData.imageUrl || 'https://via.placeholder.com/400x300'} alt="Doctor's Profile"
          />
          <div className="mt-6">
            <h2 className="text-2xl font-medium text-center text-indigo-600">{doctorData.name || 'Dr. John Doe'}</h2>
            <p className="text-gray-600 text-center mt-2">{doctorData.specialization || 'Orthopedic Surgeon'}</p>
            <p className="text-gray-600 text-center mt-2">Organization: {doctorData.organization || 'ABC Hospital'}</p>
            <p className="text-gray-600 text-center mt-2">Phone: {doctorData.phone || '(123) 456-7890'}</p>
            <div className="mt-6 text-center">
              <p className="text-gray-600 inline-block bg-gray-200 rounded-full px-3 py-1 mr-2">
                Years of Experience: {doctorData.experience || '10'}
              </p>
              <p className="text-gray-600 mt-2 inline-block bg-gray-200 rounded-full px-3 py-1">
                Specialties: {doctorData.specialties || 'Hip and Knee Surgery'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </> ) : (<> 
    <div>
      Forbidden:
    </div>
    </>)}
    </>
  );
};

export default DrProfile;
