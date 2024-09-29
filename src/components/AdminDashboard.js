import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
import UserManagement from './UserManagement';
import ServiceManagement from './ServiceManagement';
import RoleManagement from './RoleManagement';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Tabs value={activeTab} onChange={handleChange} centered>
          <Tab label="Manage Users" />
          <Tab label="Manage Services" />
          <Tab label="Manage Roles" />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        <UserManagement />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <ServiceManagement />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <RoleManagement />
      </TabPanel>
    </div>
  );
};

export default AdminDashboard;
