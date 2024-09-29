import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ServiceManagement = () => {
  const initialServices = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Graphic Design' },
    { id: 3, name: 'Digital Marketing' },
    { id: 4, name: 'Content Writing' },
    { id: 5, name: 'SEO Services' },
  ];

  const [services, setServices] = useState(initialServices);
  const [newService, setNewService] = useState('');

  const addService = () => {
    if (!newService) return;
    const newServiceObject = { id: services.length + 1, name: newService };
    setServices([...services, newServiceObject]);
    setNewService('');
  };

  const removeService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  return (
    <div>
      <h3>Manage Services</h3>
      <TextField
        label="Enter new service"
        value={newService}
        onChange={(e) => setNewService(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addService}>
        Add Service
      </Button>
      <List>
        {services.map(service => (
          <ListItem key={service.id}>
            <ListItemText primary={service.name} />
            <IconButton edge="end" aria-label="delete" onClick={() => removeService(service.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ServiceManagement;
