import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { UserProvider } from './UserContext';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Search from './components/Search';
import ProfessionalProfile from './components/ProfessionalProfile';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import CustomerSupport from './components/CustomerSupport';
import ProtectedRoute from './components/ProtectedRoute';
import ProfessionalsList from './components/ProfessionalsList';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<ProfessionalProfile />} />
            <Route path="/user" element={<ProtectedRoute component={UserProfile} role="user" />} />
            <Route path="/admin" element={<ProtectedRoute component={AdminDashboard} role="admin" />} />
            <Route path="/support" element={<ProtectedRoute component={CustomerSupport} role="support" />} />
            <Route path="/professionals" element={<ProtectedRoute component={ProfessionalsList}  role="user" />}  />
            <Route path="/professional" element={<ProtectedRoute component={ProfessionalProfile} role="professional" />} />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;
