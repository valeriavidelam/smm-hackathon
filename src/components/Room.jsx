import React from 'react';
import Button from '@material-ui/core/Button';

const Room = ({sala, setSala}) => {
  
  const {id, nombre, disponibilidad} = sala
      return (
      <div >
        <ul>
        <Button color="primary" 
        variant="outlined"
        
        disableElevation
       > {nombre}
        </Button>
      <li>{id}</li>
      <li>Disponibilidad: {disponibilidad}</li>
      </ul>
      
      
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
    );
  };
export default Room;
