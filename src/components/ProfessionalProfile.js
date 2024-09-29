import React from 'react';
import { Link } from 'react-router-dom';

const mockProfessionals = [
  { id: '1', name: 'John Smith', services: 'Web Development, SEO' },
  { id: '2', name: 'Jane Doe', services: 'Graphic Design, Branding' },
  { id: '3', name: 'Sam Johnson', services: 'Content Writing, Copywriting' },
  // Add more mock professionals as needed
];

const ProfessionalsList = () => {
  return (
    <div>
      <h2>Professionals List</h2>
      <ul>
        {mockProfessionals.map((professional) => (
          <li key={professional.id}>
            <Link to={`/profile/${professional.id}`}>
              <h3>{professional.name}</h3>
              <p>Services: {professional.services}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalsList;
