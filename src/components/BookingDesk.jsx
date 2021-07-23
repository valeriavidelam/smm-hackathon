import '../App.css'
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import oficinas from '../assets/img/Oficinas_Negro_cuadrantes.png'
import DeskTimePicker from './DeskTimePicker';
import DeskTimePickerEnd from './DeskTimePickerEnd';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import esLocale from 'date-fns/locale/es';
import Office from './Offices';
import { useHistory } from "react-router-dom";
import Breadcrumbs from './Breadcrumb';


const BookingDesk = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  let [selectedFromHour, setSelectedFromHour] = useState();
  let [selectedUntilHour, setSelectedUntilHour] = useState();
  let [avalaibleOffice, setAvalaibleOffice] = useState(false);
  let [message, setMessage] = useState('Señale fecha y hora para ver espacios disponibles');
  let [floor, setFloor] =useState('');
  let [office, setOffice] = useState('');
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const addDate = () =>{
    console.log(selectedDate);
    console.log(selectedFromHour);
    console.log(selectedUntilHour);
    if (selectedFromHour < selectedUntilHour){
      setFloor('Piso 3 - Alameda')
      setAvalaibleOffice(true);
      setMessage('Selecciona la zona de trabajo que quieres reservar');
    } else {
      alert('Por favor revisar las horas seleccionadas')
    }
  }
  let history= useHistory();

  return (
    <div className='gridMargin'>
      <Navbar />
      <Breadcrumbs />
      <div className='titles'>
      <h3>Reservar escritorio</h3>
      </div>
      <div className='gridBooking'>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Seleccione fecha"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          />
        </MuiPickersUtilsProvider>
          <div className='hourDesk'>
            <DeskTimePicker 
            value = {selectedFromHour}
            onchange = {(e) => setSelectedFromHour(e.target.value)}
            />
            <DeskTimePickerEnd 
            value = {selectedUntilHour}
            onchange = {(e) => setSelectedUntilHour(e.target.value)}
            />
          </div>
        <button onClick={addDate}>Confirmar</button>
        <Typography variant="h6" color="secondary" align='center'>{floor}</Typography>
        { avalaibleOffice ? <Office onclick={(e) => {setOffice(e.name); 
          console.log(office); 
          setTimeout(function(){ history.push("/seleccionarescritorio"); }, 800);
          //localStorage.setItem('hola');
          }}/> 
        : <img src={oficinas} alt="plano" width="350px"/>}
        <Typography variant="h6" color="secondary" align='center'>{message}</Typography>
        <Typography variant="h6" color="secondary" align='center'>{office}</Typography>
      </div>
    </div>
  )
}

export default BookingDesk
