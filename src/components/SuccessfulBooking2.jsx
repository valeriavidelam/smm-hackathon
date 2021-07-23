import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider, Typography} from '@material-ui/core';
import theme from '../themeConfig';
import {Grid, Box} from '@material-ui/core'; 
import Button from '@material-ui/core/Button';

const styleBox = {
  background: '#8bc34a ',
  borderRadius: 20,
  border: 2,
  color: 'white',
  width: 210,
  height: 300,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  
};

const style = {
  background: 'linear-gradient(200deg, #81c784 30%, #8bc34a 90%)',
  borderRadius: 9,
  border: 2,
  color: 'white',
  width: 210,
  height: 60,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  margin: theme.spacing(1),
  
};

const style2 = {
  borderRadius: 5,
  border: 2,
  color: 'lightGreen',
  width: 210,
  height: 60,
  padding: '0 30px',
  margin: theme.spacing(1),
  
  
};

const SuccessfulBooking = () => {
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid spacing={3}>
      <Grid item xl={12} sm={6} xs={6} spacing={3}>
      <Box
       style={styleBox}
       mt={20}
       p={4}>
    <br></br>
    <Typography variant="h4"  align="center">
      RESERVA CONFIRMADA
      <hr />
    </Typography>
    <br></br>
    <Typography variant="h6" align="center">
      Sala E - Tokio 
    </Typography>
     <Typography variant="body1" align="center">
      23 de Julio <br></br>
      10:00 - 12:45 hrs.
    </Typography>
    </Box>
      </Grid>
      <Grid spacing={3}>
      <Grid item xl={12} sm={6} xs={6} spacing={3}>
        <Button style={style}>
           Agregar a Calendario
      </Button>
      </Grid>
      <Grid spacing={3}>
      <Grid item xs={6} spacing={3}>
      <Button variant="outlined" color="primary" href="/inicio" >
        Volver al inicio
      </Button>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default SuccessfulBooking