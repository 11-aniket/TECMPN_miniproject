import React, { useState } from 'react';
import axios from 'axios';

const EditPage = ({ orphanName, orphanAge }) => {
  const [allergies, setAllergies] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatments, setTreatments] = useState('');
  const [disfigurements, setDisfigurements] = useState('');
  const [changedBy, setChangedBy] = useState('Dr. John Doe');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      allergies,
      symptoms,
      diagnosis,
      treatments,
      disfigurements,
      changedBy,
    };

    axios
      .post('/api/update', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="px-5 py-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-medium text-center text-indigo-600">Edit Patient Information</h2>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">Orphan Name</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={orphanName}
            readOnly
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">Orphan Age</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={orphanAge}
            readOnly
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">Allergies</label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">Symptoms</label>
        <textarea
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        />
        </div>
        <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Diagnosis</label>
        <textarea
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        />
        </div>
        <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Treatments</label>
        <textarea
        className="appearance-none border rounded w-

        full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={treatments}
        onChange={(e) => setTreatments(e.target.value)}
        />

        </div>
        <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Disfigurements</label>
        <textarea
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={disfigurements}
        onChange={(e) => setDisfigurements(e.target.value)}
        />
        </div>
        <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Changed By</label>
        <input
        type="text"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={changedBy}
        onChange={(e) => setChangedBy(e.target.value)}
        />
        </div>
        <div className="mt-6">
        <button className="bg-indigo-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit" > Submit </button>
        </div>
        </form>
        </div>
        ); };  
  export default EditPage;