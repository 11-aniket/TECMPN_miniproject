import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [org, setOrg] = useState('');

  const handleSubmit = async () => {
    const res = await axios.post('<API_ENDPOINT_URL>', {
      username,
      password,
      org,
      role,
    });

    if (res.status === 200) {
      switch (role) {
        case 'User':
          navigate(`/user/${res.data.id}`);
          break;
        case 'Admin':
          navigate(`/admin/${res.data.id}`);
          break;
        case 'Doctor':
          navigate(`/drprofile/${res.data.id}`);
          break;
        case 'Parent':
          navigate(`/parent/${res.data.id}`);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="relative w-full h-screen justify-center bg-gray-900/80">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src="../images/login.jpg"
        alt=""
      />
      <div className="flex justify-center items-center h-full">
        <form action="" className="max-w-[500px] w-full mx-auto bg-white p-8 rounded-2xl">
          <h2 className="text-4xl font-bold text-center py-4 border-x-8">
            Orphan Foundation Center
          </h2>
          <hr />

          <div className="flex flex-col mb-4 ">
            <label>Username</label>
            <input
              className="border relative bg-gray-200 p-2"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <label>Password</label>
            <input
              className="border relative bg-gray-200 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <label>Select Role</label>
            <div className="relative w-full flex flex-col mb-4">
              <select
                className="w-full p-2 text-black bg-gray-200"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                >
                <option value="" disabled>
                Select Role
                </option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Doctor">Doctor</option>
                <option value="Parent">Parent</option>
                </select>
                </div>
                </div>
                <div className="flex flex-col mb-4 ">
                <label>Organization</label>
                <div className="relative w-full flex flex-col mb-4">
              <select
                className="w-full p-2 text-black bg-gray-200"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                >
                <option value="" disabled>
                Select Organization
                </option>
                <option value="org1">Organization_1</option>
                <option value="org2">Organization_2</option>
                </select>
                </div>
                </div>
                    <div className="flex items-center">
                    <button
                      className="w-full p-2 bg-black text-white font-bold hover:bg-teal-700"
                      onClick={handleSubmit}
                    >
                    Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
        );    
    };                
export default SignIn;