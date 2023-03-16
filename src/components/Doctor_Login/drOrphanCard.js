import React from 'react';
import { Link } from 'react-router-dom';

const OrphanCard = ({ id, name, age, organization, allergies, prev_diagnosis, prev_treatment, prev_disfigurements }) => {
  return (
    
    <div className=" bg-white border-4 border-gray-300 shadow-md rounded-md p-4 flex flex-col" style={{marginBottom: '1rem'}}>
      <h2 className="text-2xl font-bold mb-2 text-center">Name: {name}</h2>
      <p className="text-gray-600 mb-2 text-center">Age: {age}</p>
      <p className="text-gray-600 mb-4 text-center">Organization: {organization}</p>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2 text-center">Medical History</h3>
        <table className="table-fixed">
          <tbody>
            <tr>
              <td className="font-bold pr-4">Allergies:</td>
              <td>{allergies.join(", ") || "None"}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Previous Diagnosis:</td>
              <td>{prev_diagnosis || "None"}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Previous Treatment:</td>
              <td>{prev_treatment || "None"}</td>
            </tr>
            <tr>
              <td className="font-bold pr-4">Previous Disfigurements:</td>
              <td>{prev_disfigurements.join(", ") || "None"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to={`/dreditOrphan/${id}`} className="bg-green-500 w-11/12 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
        Edit
      </Link>
    </div>
  );
};

export default OrphanCard;
