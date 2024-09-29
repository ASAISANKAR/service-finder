import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const credentials = {
  admin: 'adminpass',
  user: 'userpass',
  support: 'supportpass',
  professional: 'profpass',
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setRole } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials[username] === password) {
      setRole(username);
      navigate('/'); 
    } else {
      alert('Invalid credentials'); 
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Box>
  );
}

export default Login;
