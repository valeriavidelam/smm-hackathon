// import '../App.css'
// import React, {useState} from 'react';
// import Navbar from './Navbar';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import escritorio from '../assets/img/g5.PNG'
// import data from '../data/data.json';
// import Desk from './Desk';

// const SelectDesk = () => {
  
//   const [salas, setSala] = useState(data.zonasDeTrabajo);
//   const sala5 = salas.filter((data) => data.id === "G_5");
//   // console.log(salas);
//   return (
//     <div>
//       <Navbar />
//       <div className='titles'>
//       <h3>Selecciona escritorio</h3></div>
//       <Grid container justifyContent="space-around">
//       <div>
//       <img src={escritorio} alt="escritorio" width="300px" className='desk'/>
//       <h3>Escritorio</h3>
//       </div>
//       {sala5.map((sala) => (
       
//        <Desk
//          id={sala.id}
//          nombre={sala.nombre}
//          disponibilidad={sala.disponibilidad}
//          escritorio={sala.escritorio}
//          setSala={setSala}
//          /> 
//          ))}
         
      
      
//       <Typography variant="h6" color="secondary" align='center'>
//       Selecciona un escritorio disponible
//       </Typography>
//       </Grid>
      
     
     
  
     
//   </div>
//   )
// }

// export default SelectDesk