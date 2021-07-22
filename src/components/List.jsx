import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmailBtn from '../assets/img/Emailicon.png'
import Avatar from '../assets/img/Pic.jpg'

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
        },
      }));
     
      
      const SimpleList = () => {
        const classes = useStyles();
      
        return (
          <div className={classes.root}>
             <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <ListItemText secondary="Pedro Campos" />
          <img src={EmailBtn} alt="" onClick/>
        </ListItem>    
      </List>
          </div>
        );
      }

export default SimpleList
