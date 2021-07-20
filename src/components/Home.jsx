import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import theme from '../themeConfig';
import Navbar from './Navbar';


const Home = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Navbar />
      <h1>Soy el home</h1>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur harum consequatur aliquid perferendis, quibusdam sed praesentium nihil tempore, rerum totam, reiciendis saepe provident minus. Voluptates eos porro laborum nam numquam.</h1>
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
