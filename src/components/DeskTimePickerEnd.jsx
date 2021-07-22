import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const DeskTimePickerEnd = ({value, onchange}) => {
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

  // const handleChange = (event) => {
  //   console.log(event);
  // };
  let hours = ['08:45', '09:45', '10:45', '11:45'];
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Hasta</InputLabel>
        <Select
          native
          value={value}
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

export default DeskTimePickerEnd