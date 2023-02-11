import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import OrphanCard from './drOrphanCard';

const OrphanUMe = () => {
const [orphans, setOrphans] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/channels/mychannel/chaincodes/fabcar/admin-queryall-orphan')
      .then(res => setOrphans(res.data))
      .catch(err => console.error(err));
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