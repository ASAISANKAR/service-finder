// src/components/ProfessionalProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfessionalProfile = () => {
  const { id } = useParams();
  const [professional, setProfessional] = useState(null);

  useEffect(() => {
    const fetchProfessional = async () => {
      const response = await axios.get(`/api/professionals/${id}`);
      setProfessional(response.data);
    };
    fetchProfessional();
  }, [id]);

  if (!professional) return <div>Loading...</div>;

  return (
    <div>
      <h2>{professional.name}</h2>
      <p>Services: {professional.services}</p>
      {/* Add more details as necessary */}
      
    </div>
  );
};

export default ProfessionalProfile;
