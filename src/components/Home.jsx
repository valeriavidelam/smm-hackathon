import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import theme from '../themeConfig';


const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Soy el home</h1>
      <Button variant="contained" color="primary">
       Boton1
      </Button>
      <Button variant="contained" color="secondary">
        Boton2
      </Button>
    </ThemeProvider>
  )
}

export default Home
