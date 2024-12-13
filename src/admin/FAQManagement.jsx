// src/pages/FAQManagement.js
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

const FAQManagement = () => {
  const faqs = [
    { id: 1, question: 'What is React?', answer: 'A JavaScript library for building UI.' },
    { id: 2, question: 'What is Material-UI?', answer: 'A React UI framework.' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Manage FAQs
      </Typography>
      <Paper sx={{ padding: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell>Answer</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faqs.map((faq) => (
              <TableRow key={faq.id}>
                <TableCell>{faq.question}</TableCell>
                <TableCell>{faq.answer}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ marginRight: 1 }}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default FAQManagement;
