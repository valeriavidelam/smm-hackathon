import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import theme from '../themeConfig';
import Navbar from './Navbar';


const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant="h5" color="secondary" align="center">
        Hola, María José
      </Typography>
      <Typography variant="body1" color="secondary" align="center">
        ¿Qué quieres hacer?
      </Typography>
      <Button variant="outlined" color="primary">
       RESERVAR ESCRITORIO
      </Button>
      <Button variant="outlined" color="primary">
       RESERVAR SALA
      </Button>
      <Button variant="outlined" color="primary">
       BUSCAR COLABORADOR
      </Button>
      <Button variant="outlined" color="primary">
       MIS RESERVAS
      </Button>
    </ThemeProvider>
  )
}

export default Home
