import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import theme from '../themeConfig';
import Navbar from './Navbar';
import {Box, Grid} from '@material-ui/core'; 
import ImportantDevicesTwoToneIcon from '@material-ui/icons/ImportantDevicesTwoTone';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';



const style = {
  background: 'linear-gradient(50deg, #0288d1 30%, #8bc34a 90%)',
  borderRadius: 30,
  border: 2,
  color: 'white',
  width: 210,
  height: 80,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  
};


const Home = () => {
 
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <Box
             color='secondary.main'
             mt={2}
             p={5}>
              <Typography variant="h5" color="secondary" align="center">
                Hola, María José
              </Typography>
              <Typography variant="body1" color="secondary" align="center">
                ¿Qué quieres hacer?
              </Typography>
          </Box>
        </Grid>
      <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      >
      <Grid item xl={12} sm={6} xs={6} spacing={3}>
    
        <Button style={style} href="/reservaescritorio">
           <ImportantDevicesTwoToneIcon />
           <Typography variant="body2" color="white" align="center">
              ¿Qué quieres hacer?
            </Typography>
       
      </Button>
   
      </Grid>
     

      <Grid item xs={6} spacing={3}>
      <Button style={style} href="/reservasala">
        <PeopleIcon />
       AGENDAR REUNIÓN
      </Button>
      </Grid>
    
    
      <Grid item xs={6} spacing={3}>
      <Button style={style} href="/buscarcolaborador">
        <SearchIcon />
       BUSCAR COLABORADOR
      </Button>
      </Grid>
      

      <Grid  item xs={6} spacing={3}>
      <Button style={style}>
        <EventAvailableIcon />
       MIS RESERVAS
      </Button> 
      </Grid>
      </Grid>
      </Grid>
    
    </ThemeProvider>
  )
}

export default Home;
