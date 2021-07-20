import React from 'react';
import Typography from '@material-ui/core/Typography';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {
 
  return (
    <div>
          <IconButton color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
          </Typography>
    </div>
  )
}

export default Navbar
