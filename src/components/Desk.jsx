import React from 'react';
import Button from '@material-ui/core/Button'

// import Button from '@material-ui/core/Button';


const Desk = ({ escritorio, disponibilidad, setSala}) => {
  //const  {id, numero} = escritorio
//  console.log(escritorio)

    return ( 
        <div>
         <div>
        
        {/* {/* <Button color="primary" 
        variant="outlined"
        > {nombre}
        </Button> */}
        
        {escritorio.map((escri)  => (
           
            <Button color="primary" 
            className= "button-desk"
      variant="outlined"
      disableElevation>
         {escri.numero}
      </Button>
        ))}
       <ul> 
        <li>Escritorio disponibles: {disponibilidad}</li>
        </ul>
      </div>
   
</div>
    );
  };
 
    

        
export default Desk