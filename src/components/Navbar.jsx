import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme =>({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}

export default Navbar
