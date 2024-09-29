import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

function Navbar() {
  const { role, setRole } = useUser();
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    setRole(null); 
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <Button color="inherit" component={Link} to="/">Search</Button>
        
        {role === 'admin' && (
          <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>
        )}
        {role === 'user' && (
          <Button color="inherit" component={Link} to="/user">User Profile</Button>
        )}
        {role === 'user' && (
           <Button color="inherit" component={Link} to="/professionals">View Professionals</Button> 
        )}

        {role === 'support' && (
          <Button color="inherit" component={Link} to="/support">Customer Support</Button>
        )}
        {role === 'professional' && (
          <Button color="inherit" component={Link} to="/professional">Professional Services</Button>
        )}
        {role && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
        {!role && <Button color="inherit" component={Link} to="/login">Login</Button>}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
