import React from 'react';
import { TextField, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Search() {
  const users = [
    { module: 'Admin', username: 'admin', password: 'adminpass' },
    { module: 'User', username: 'user', password: 'userpass' },
    { module: 'Support', username: 'support', password: 'supportpass' },
    { module: 'Professional', username: 'professional', password: 'profpass' }
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
        <TextField label="Search" variant="outlined" sx={{ marginRight: 2 }} />
        <Button variant="contained" color="primary">Search</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Modules</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.username}>
                <TableCell>{user.module}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Search;
