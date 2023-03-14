import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import OrphanCard from './drOrphanCard';
import DrNavbar from './DrNavbar';

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
        setOrphans([
          { id: 1, name: 'John Doe', age: 10, organization: 'Example Organization', allergies: ["cough"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] },
          { id: 2, name: 'Saurabh Dubey', age: 15, organization: 'Example Organization', allergies: ["Cancer"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] },
          { id: 3, name: 'Priyanshu Shukla', age: 10, organization: 'Example Organization', allergies: ["Typhoid"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] },
          { id: 4, name: 'Shankar Malve', age: 10, organization: 'Example Organization', allergies: ["Brain Cancer"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] },
          { id: 5, name: 'Mandar Pawar', age: 10, organization: 'Example Organization', allergies: ["Brain Tumor"], prev_diagnosis: 'NA', prev_treatment: 'NA', prev_disfigurements: ["NA"] }
        ]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen">
      <DrNavbar />
     
      <div className='flex flex-col items-center justify-center mt-10 md:mt-20 px-0 md:pl-10 w-3/5'>
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
    </div>
  );
};

export default OrphanUMe;
