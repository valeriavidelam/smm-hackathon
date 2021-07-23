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

import { useHistory } from "react-router-dom";
import {db} from '../firebase.js';


const style = {
  background: 'linear-gradient(50deg, #8bc34a 30%, #8bc34a 90%)',
  borderRadius: 30,
  border: 2,
  color: 'white',
  width: 210,
  height: 50,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

};

const SelectDesk = () => {
  let [selectDesk, setSelectDesk] = useState('');
  let history = useHistory();
  //const myData = localStorage.getItem('hola');

  const addBooking = () => {
    alert('se ejecutará la reserva');
    history.push('/reservaexitosa');
    if (selectDesk !== '') {
      const newBooking = {
        user: 'María José',
        date: '30 de Julio',
        from: '09:00',
        to: '12:45',
        zona: 'G_5',
        desk: selectDesk,
      }
      db.collection('bookings').add(newBooking)
        .then(() => {
          console.log('reserva añadida correctamente');
          history.push('/reservaexitosa');
        })
        .catch((error) => {
          alert('Hubo un problema con tu reserva');
        })

    } else {
      alert ('Faltan datos para la reserva');
    };
  };

    return (
      <div className='gridMargin'>
        <Navbar />
        <div className='titles'>
          <h3>Reservar escritorio</h3>
        </div>
        <div className='gridBooking'>
          <Desks onclick={(e) => { setSelectDesk(e.name) }} />
          <Typography variant="h6" color="secondary" align='center'>30 de Julio</Typography>
          <Typography variant="h6" color="secondary" align='center'>09:00 - 12:45</Typography>
          <Typography variant="h6" color="secondary" align='center'>Seleccionaste escritorio: {selectDesk}</Typography>
          <br />
          {(selectDesk && <Button style={style} onClick={addBooking} variant="contained" color="primary">Reservar</Button>)}
        </div>
      </div>
    )
  }
  export default SelectDesk;
