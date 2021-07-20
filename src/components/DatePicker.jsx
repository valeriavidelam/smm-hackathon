import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const DatePicker = () => {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          
        </MuiPickersUtilsProvider>
      );
    }
export default DatePicker