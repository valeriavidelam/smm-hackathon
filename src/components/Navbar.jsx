import '../App.css'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/images/FrameEverisColor.png';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(theme =>({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(1),
  },
  customBar:{
    background: '#ffffff',
    marginTop: '25px',
  }
}))

const Navbar = () => {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  return (
    <div>
      <AppBar className={classes.customBar} >
        <Toolbar>
            <div className='logoHeader'>
              <a href ="/home"><img src={logo} alt="logo" width="83px"></img></a>
            </div> 
          <Typography variant="h6">
            Hola, María José
          </Typography>
          <div>
            <IconButton 
              color="inherit" 
              aria-label="menu" 
              className={classes.menuButton}
              ref={anchorRef}
              aria-controls={openMenu ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
            <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={openMenu} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Reservar escritorio</MenuItem>
                    <MenuItem onClick={handleClose}>Agendar reunión</MenuItem>
                    <MenuItem onClick={handleClose}>Buscar colaborador</MenuItem>
                    <MenuItem onClick={handleClose}>Reportar un problema</MenuItem>
                    <MenuItem onClick={handleClose}>Mis reservas</MenuItem>
                    <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Cerra sesión</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}

export default Navbar
