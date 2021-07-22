import React from 'react';
import { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Desks from './Desks';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {db} from '../firebase.js';


const SelectDesk = () => {
  let [selectDesk, setSelectDesk] = useState('');
  let history = useHistory();
  const myData = localStorage.getItem('hola');

  const addBooking = () => {
    alert('se ejecutará la reserva');
    history.push('/reservaexitosa');
    if (selectDesk !== '') {
      const newBooking = {
        user: 'usuario',
        date: 'su fecha',
        from: 'desde',
        to: 'hasta',
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
          <Typography variant="h6" color="secondary" align='center'>Fecha:</Typography>
          <Typography variant="h6" color="secondary" align='center'>Desde - Hasta</Typography>
          <Typography variant="h6" color="secondary" align='center'>Seleccionaste escritorio: {selectDesk}</Typography>
          <br />
          {(selectDesk && <Button onClick={addBooking} variant="contained" color="primary">Reservar</Button>)}
        </div>
      </div>
    )
  }
  export default SelectDesk;
