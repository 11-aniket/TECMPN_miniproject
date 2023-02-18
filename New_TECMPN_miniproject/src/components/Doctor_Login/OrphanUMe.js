import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import OrphanCard from './drOrphanCard';

const OrphanUMe = () => {
  const [orphans, setOrphans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Axios.get('http://localhost:8000/channels/mychannel/chaincodes/fabcar/admin-queryall-orphan');
        setOrphans(res.data);
      } catch (err) {
        console.error(err);
        // Set a default value for orphans in case the API request fails
        setOrphans([{ id: 1, name: 'John Doe', age: 10, organization: 'Example Organization', allergies: ["cough"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] },
        { id: 1, name: 'Saurabh Dubey', age: 15, organization: 'Example Organization', allergies: ["Cancer"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] }
      ,{ id: 1, name: 'Priuanshu Shukla', age: 10, organization: 'Example Organization', allergies: ["Typhoid"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] },
      { id: 1, name: 'Shankar Malve', age: 10, organization: 'Example Organization', allergies: ["Brain Cancer"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] },
      { id: 1, name: 'Mandar Pawar', age: 10, organization: 'Example Organization', allergies: ["Brain Tumor"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] }]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {orphans.map(orphan => (
        <OrphanCard
          key={orphan.id}
          name={orphan.name}
          age={orphan.age}
          organization={orphan.organization}
          allergies={orphan.allergies}
          prev_diagnosis={orphan.prev_diagnosis}
          prev_treatment={orphan.prev_treatment}
          prev_disfigurements={orphan.prev_disfigurements}
        />
      ))}
    </div>
  );
};

export default OrphanUMe;
