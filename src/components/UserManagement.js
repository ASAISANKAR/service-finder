import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UserManagement = () => {
  const initialUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
    { id: 4, name: 'Emily Davis' },
    { id: 5, name: 'Chris Evans' },
  ];
  
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState('');

  const addUser = () => {
    if (!newUser) return;
    const newUserObject = { id: users.length + 1, name: newUser };
    setUsers([...users, newUserObject]);
    setNewUser('');
  };

  const removeUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h3>Manage Users</h3>
      <TextField
        label="Enter new user name"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addUser}>
        Add User
      </Button>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} />
            <IconButton edge="end" aria-label="delete" onClick={() => removeUser(user.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserManagement;
