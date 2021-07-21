import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import esLocale from 'date-fns/locale/es'


const DeskDateSelector = ({value, handleDateChange}) =>{  
  //const [selectedDate, setSelectedDate] = React.useState(new Date());

  // const handleDateChange = (date) => {
  //   return date;
  // };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Seleccione fecha"
          format="dd/MM/yyyy"
          value={value}
          onChange={handleDateChange}
          onAccept={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}
export default DeskDateSelector;