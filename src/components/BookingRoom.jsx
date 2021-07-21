import React, {useState} from 'react';
import data from '../data/data.json';
import Room from './Room'
// import Button from '@material-ui/core/Button';

const BookingRoom = () => {
  
  const [salas, setSala] = useState(data.zonasDeTrabajo);
  //estado escritorio
  // const [escritorio, setEscritorio] = useState([]);

    return (
      <div >
        <h3>Escritorio</h3>
        {salas.map((sala) => (
        <Room
          key={sala.id}
          sala={sala}
          // escritorio={escritorio}
          // setEscritorio={setEscritorio}
          setSala={setSala}
          
        />
      ))}

      
        {/* <Button color="primary" 
        variant="outlined"
        
        disableElevation
        onClick={() => {
            setShow(data.zonasDeTrabajo);
            }}>ver sala
        </Button> */}

        
      
       
       {/* {show.map((data) => (
         <BookingRoom
           key={data.id}
           nombre={nombre}
           id={id}
            */}
         {/* />
       ))} */}
       </div>
    )
  }
export default BookingRoom
