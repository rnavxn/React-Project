import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from '@mui/material';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SupportSection />
      <CovidSection />
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ShopCart
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/about">About</Button>
        <Button color="inherit" href="/shop">Shop</Button>
        <Button color="inherit" href="/donate">Donate</Button>
        <Button color="inherit" href="/contact">Contact</Button>
        <Button color="inherit" href="/cart">🛒</Button>
      </Toolbar>
    </AppBar>
  );
};

const HeroSection = () => {
  return (
    <Box 
      sx={{
        backgroundImage: 'url("https://png.pngtree.com/background/20230612/original/pngtree-shopping-cart-floating-around-a-digital-background-with-modern-elements-picture-image_3362317.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '100px 20px'
      }}
    >
      <Typography variant="h2" component="h2">Serving you since 1989.</Typography>
      <Typography variant="h5" component="p" style={{ marginBottom: '20px' }}>
        Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
      </Typography>
      <Button variant="contained" color="primary">Shop Merch</Button>
    </Box>
  );
};

const SupportSection = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '50px 20px' }}>
      <Typography variant="h4" component="h2">Support Acme Outdoors.</Typography>
      <Typography variant="body1" component="p" style={{ margin: '20px 0' }}>
        COVID-19 has forced us to close our retail space, but we need support from patrons like you now more than ever.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <SupportCard 
            title="Shop Products" 
            number="01" 
            description="Our full product line is still available online for you to browse and enjoy. Get your gear today!"
            
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SupportCard 
            title="Donate" 
            number="02" 
            description="Since we've changed the way we operate to adhere to safety guidelines, a donation helps us a lot." 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SupportCard 
            title="Buy Gift Cards" 
            number="03" 
            description="Have an outdoor gear lover in your life? Buy a gift card for them today." 
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const SupportCard = ({ title, number, description }) => {
  return (
    <Card style={{ backgroundColor: '#f5f5f5' }}>
      <CardContent>
        <Typography variant="h5" component="h3">{number}</Typography>
        <Typography variant="h6" component="h4">{title}</Typography>
        <Typography variant="body2" component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

const CovidSection = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '50px 20px'
      }}
    >
      <Typography variant="h4" component="h2">How we're keeping you safe during COVID-19</Typography>
      <Typography variant="body1" component="p" style={{ marginBottom: '20px' }}>
        At Acme Outdoors, we've taken precautionary measures to ensure the safety of all our customers and team members.
      </Typography>
      <Button variant="contained" color="primary">Read Our Statement</Button>
    </Box>
  );
};

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
      <Typography variant="body1">Shop Products Open 24/7/365.</Typography>
    </Box>
  );
};

export default Homepage;