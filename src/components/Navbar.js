import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function Navbar() {

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Learning Centre
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Class 
          </Button>

          <Button color="inherit">Stories</Button>
          <Button color="inherit" variant="outlined">English</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
