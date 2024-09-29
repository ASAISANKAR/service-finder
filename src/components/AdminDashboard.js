// src/components/AdminDashboard.js
import React, { useState } from 'react';
import UserManagement from './UserManagement';
import ServiceManagement from './ServiceManagement';
import RoleManagement from './RoleManagement';
import ProfessionalsList from './ProfessionalsList';
import { Button } from '@mui/material';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <Button variant="contained" onClick={() => setActiveTab('users')}>Manage Users</Button>
        <Button variant="contained" onClick={() => setActiveTab('services')}>Manage Services</Button>
        <Button variant="contained" onClick={() => setActiveTab('roles')}>Manage Roles</Button>
        <Button variant="contained" onClick={() => setActiveTab('professionals')}>View Professionals</Button>
      </nav>
      <hr />
      {activeTab === 'users' && <UserManagement />}
      {activeTab === 'services' && <ServiceManagement />}
      {activeTab === 'roles' && <RoleManagement />}
      {activeTab === 'professionals' && <ProfessionalsList />}
    </div>
  );
};

export default AdminDashboard;
