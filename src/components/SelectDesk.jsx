import React from 'react';
import { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Desks from './Desks';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Breadcrumbs from './Breadcrumb'

 const SelectDesk = () => {
   let [selectDesk, setSelectDesk] = useState('');
   const addBooking =() =>{
     alert('se ha realizado una reserva');
   }
  return (
    <div className='gridMargin'>
      <Navbar />
      <Breadcrumbs />
      <div className='titles'>
        <h3>Reservar escritorio</h3>
      </div>
      <div className='gridBooking'>
        <Desks onclick={(e) => {setSelectDesk(e.name)}}/>
        <Typography variant="h6" color="secondary" align='center'>Fecha:</Typography>
        <Typography variant="h6" color="secondary" align='center'>Desde - Hasta</Typography>
        <Typography variant="h6" color="secondary" align='center'>Seleccionaste escritorio: {selectDesk}</Typography>
        <br/>
        {(selectDesk && <Button onClick={addBooking} variant="contained" color="primary">Reservar</Button>)}
      </div>
    </div>
  )
}
export default SelectDesk; 
