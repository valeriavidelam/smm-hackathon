import React from 'react';
//import { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
// import Room from './Room';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import ofTokio from '../assets/img/oficina_tokio.jpg'
import addicon from '../assets/img/Addicon.png'
import icono3 from '../assets/img/icono3.png'
import { useHistory }  from "react-router-dom";


 const SelectRoom= () => {
   //let [selectDesk, setSelectDesk] = useState('');
   let history = useHistory();
   const addBooking =() =>{
     alert('se ha realizado una reserva');
     history.push('/reservaexitosareu');
    };

   return (
    <div className='gridMargin'>
      <Navbar />
      <div className='titles'>
        <h3>Invitar</h3>
      </div>
      <div className='gridBooking'>
      

      <Typography variant="h5" color="secondary" align='center'>Sala E - Tokio </Typography>
      <img src={"https://i.ibb.co/cbt7Fzc/tokio.png"} alt="escritorio" width="25px"/>
        <Typography variant="h6" color="secondary" align='center'>23 de julio 10:00 a 12:45hrs </Typography>
        
        <img src={ofTokio} alt="escritorio" width="300px"/>
        <img src={icono3} alt="escritorio" width="25px"/>
        <Typography variant="h6" color="secondary" align='center'>Capacidad 3 personas </Typography>
        <Typography variant="h6" color="secondary" align='center'>Asunto: </Typography>
        <img src={addicon} alt="escritorio" width="25px"/>
        <Typography variant="h6" color="secondary" align='center'>Agregar invitado </Typography>
        <br/>
        <Button onClick={addBooking} variant="contained" color="primary">Agendar</Button>
      </div>
    </div>
  )
}
export default SelectRoom; 
