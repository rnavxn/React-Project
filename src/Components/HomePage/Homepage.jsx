import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from '@mui/material';


const Homepage = () => {
  return (
    <div className='homepage'>
      <div>
        <Navbar />
      </div>
      
      <div>
        <Empty/>
      </div>

      <div className='footer'>
        <Footer />
      </div>
   
    </div>   
  );
};

const Navbar = () => {
  return (
    <AppBar position="static" style={{backgroundColor: '#ce1919'}}>
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 , fontWeight: 'bold'}}>
          FLIGHT RESERVATION
        </Typography>
        <Button color="inherit" href="/home">Home</Button>
        <Button color="inherit" href="/home">About</Button>
        <Button color="inherit" href="/home">RESERVE</Button>
        <Button color="inherit" href="/home">Contact</Button>
        <Button color="inherit" href="/login">LOGOUT</Button>
      </Toolbar>
    </AppBar>
  );
};

const Empty = () => {
  return (
    <div>
      hi
    </div>
  )
}



const Footer = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <Typography variant="body1">Booking Opens 24/7/365.</Typography>
    </Box>
  );
};

export default Homepage;