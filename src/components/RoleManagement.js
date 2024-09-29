import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const RoleManagement = () => {
  // Sample Users Data
  const initialUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
    { id: 4, name: 'Emily Davis' },
    { id: 5, name: 'Chris Evans' },
  ];

  // Sample Roles Data with Assigned Users
  const initialRoles = [
    { id: 1, name: 'Admin', assignedUsers: [] },
    { id: 2, name: 'User', assignedUsers: [] },
    { id: 3, name: 'Professional', assignedUsers: [] },
    { id: 4, name: 'Customer Support', assignedUsers: [] },
  ];

  const [roles, setRoles] = useState(initialRoles);
  const [newRole, setNewRole] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');

  const addRole = () => {
    if (!newRole) return;
    const newRoleObject = { id: roles.length + 1, name: newRole, assignedUsers: [] };
    setRoles([...roles, newRoleObject]);
    setNewRole('');
  };

  const removeRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  const assignUserToRole = (roleId) => {
    const role = roles.find(role => role.id === roleId);
    const userToAssign = initialUsers.find(user => user.id === parseInt(selectedUserId));

    if (userToAssign && !role.assignedUsers.includes(userToAssign)) {
      const updatedRole = { ...role, assignedUsers: [...role.assignedUsers, userToAssign] };
      const updatedRoles = roles.map(r => (r.id === roleId ? updatedRole : r));
      setRoles(updatedRoles);
      setSelectedUserId('');
    }
  };

  return (
    <div>
      <h3>Manage Roles</h3>
      <TextField
        label="Enter new role"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addRole}>
        Add Role
      </Button>
      <br /><br />
      
      <TextField
        label="Select User ID to Assign"
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <List>
        {roles.map(role => (
          <ListItem key={role.id}>
            <ListItemText primary={role.name} />
            <Button variant="outlined" color="secondary" onClick={() => assignUserToRole(role.id)}>
              Assign User
            </Button>
            <div>
              {role.assignedUsers.map(user => (
                <Chip key={user.id} label={user.name} onDelete={() => {}} style={{ margin: '4px' }} />
              ))}
            </div>
            <IconButton edge="end" aria-label="delete" onClick={() => removeRole(role.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RoleManagement;
