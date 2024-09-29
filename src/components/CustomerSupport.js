// src/components/CustomerSupport.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CustomerSupport = () => {
  const [supportTickets, setSupportTickets] = useState([]);

  useEffect(() => {
    // Mock data for support tickets
    const mockTickets = [
      { id: 1, user: 'John Doe', issue: 'Unable to login', status: 'Open' },
      { id: 2, user: 'Jane Smith', issue: 'Payment issue', status: 'Resolved' },
      { id: 3, user: 'Mike Johnson', issue: 'Profile not updating', status: 'In Progress' },
    ];

    setSupportTickets(mockTickets);
  }, []);

  return (
    <div>
      <h2>Customer Support</h2>
      <p>If you have any inquiries, please contact us!</p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supportTickets.map(ticket => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.user}</TableCell>
                <TableCell>{ticket.issue}</TableCell>
                <TableCell>{ticket.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerSupport;
