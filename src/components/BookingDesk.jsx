import '../App.css'
import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import DeskDateSelector from './DeskDatePicker';
import Grid from '@material-ui/core/Grid';
import oficinas from '../assets/img/Oficinas_Concuadrante.png'

const BookingDesk = () => {
  return (
    <div className='bookingDesk'>
      <Navbar />
      <div className='titles'>
      <h3>Reservar escritorio</h3>
      </div>
      <Grid container justifyContent="space-around">
        <DeskDateSelector />
        <img src={oficinas} alt="logo" width="300px"/>
        <Typography variant="h6" color="secondary" align='center'>
        Señale fecha y hora para ver espacios disponibles
        </Typography>
      </Grid>
    </div>
  )
}

export default BookingDesk
