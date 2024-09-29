// src/components/ProfessionalsList.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, List, ListItem } from '@mui/material';

const ProfessionalsList = () => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    
    const mockProfessionals = [
      { id: 1, name: 'Alice Johnson', role: 'Web Developer' },
      { id: 2, name: 'Bob Smith', role: 'Graphic Designer' },
      { id: 3, name: 'Charlie Brown', role: 'Data Scientist' },
    ];

    
    setTimeout(() => {
      setProfessionals(mockProfessionals);
    }, 1000);
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Professionals List
      </Typography>
      <List>
        {professionals.map((professional) => (
          <ListItem key={professional.id}>
            <Typography>
              {professional.name} - {professional.role}
            </Typography>
            <Button variant="contained" sx={{ marginLeft: 2 }}>
              View Profile
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProfessionalsList;
