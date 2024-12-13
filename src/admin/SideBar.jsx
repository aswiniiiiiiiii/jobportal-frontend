// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const links = [
        { text: 'Dashboard', path: '/' },
        { text: 'Manage FAQs', path: '/faq-management' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Box sx={{ padding: 2, textAlign: 'center', fontWeight: 'bold', backgroundColor: '#1976d2', color: '#fff' }}>
                Admin Panel
            </Box>
            <List>
                {links.map((link, index) => (
                    <ListItem button key={index} component={Link} to={link.path}>
                        <ListItemText primary={link.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SideBar;
