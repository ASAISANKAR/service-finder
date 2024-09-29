import React, { useState } from 'react';
import { TextField, Button, Typography, Avatar, Paper } from '@mui/material';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Logic to save user data (e.g., API call)
    console.log('User data saved:', user);
    setEditing(false);
  };

  return (
    <Paper style={{ padding: '16px', margin: '16px' }}>
      <Avatar style={{ width: '60px', height: '60px', marginBottom: '16px' }} />
      <Typography variant="h4">User Profile</Typography>
      {editing ? (
        <div>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <Button variant="outlined" onClick={handleEdit}>
            Edit Profile
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default UserProfile;
