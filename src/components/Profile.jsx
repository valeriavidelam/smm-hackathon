import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const Profile = () => {
  return (
    <div className="App">
      <h1>Acá va el perfil</h1>
      <Button color="secondary" 
      variant="contained"
      disableElevation>
        BOTON
      </Button>
      <DeleteIcon color="primary"></DeleteIcon>
    </div>
  )
}

export default Profile
