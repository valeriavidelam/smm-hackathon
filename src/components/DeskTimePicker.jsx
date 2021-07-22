import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const DeskTimePicker = ({value, onchange}) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  //let [selectedFromHour, setSelectedFromHour] = React.useState();
  
  // const handleChange = (value) => {
  //   console.log(value);
  //   setSelectedFromHour=(value);
  // };
  let hours = ['08:00', '09:00', '10:00', '11:00'];
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Desde</InputLabel>
        <Select
          native
          value= {value}
          onChange={onchange}
          inputProps={{
            name: 'Desde',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {hours.map((el) => <option value={el}>{el}</option>)}
        </Select>
       </FormControl>
    </div>
  )
}

export default DeskTimePicker