import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users'); 
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users", error);
      setLoading(false);
    }
  };

  const addUser = async () => {
    if (!newUser) return;
    try {
      const response = await axios.post('/api/users', { name: newUser }); 
      setUsers([...users, response.data]);
      setNewUser('');
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  const removeUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`); 
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error removing user", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Manage Users</h3>
      <div>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user name"
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
