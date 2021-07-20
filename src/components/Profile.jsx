import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <div className="App">
      <Navbar />
      <h1>Acá va el perfil</h1>
      <Button color="primary" 
      variant="contained"
      disableElevation>
        BOTON
      </Button>
      <DeleteIcon color="primary"></DeleteIcon>
    </div>
  )
}

export default Profile
