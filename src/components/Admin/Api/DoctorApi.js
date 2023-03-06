/*

import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    const dataArray = Array.from(data); // Converting response data into an array
    return dataArray;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchData;

*/
const doctor = [
    {
        id:1,
        image:"../images/doctor.jpeg",
        name: "Dr. Suraj Sharma",
        age:"33",
        year_of_enroll:"2001",
        years_of_experience:"4",
        specialization : "Dentist",
    },
    {
      id:2,
      image:"../images/doctor.jpeg",
      name: "Dr. Neil Ora",
      age:"35",
      year_of_enroll:"2003",
      years_of_experience:"10",
      specialization : "Therapist",
  },
  {
    id:3,
    image:"../images/doctor.jpeg",
    name: "Dr. Neil Ora",
    age:"35",
    year_of_enroll:"2003",
    years_of_experience:"10",
    specialization : "Psychotherapist",
  },
  ];
  
  export default doctor