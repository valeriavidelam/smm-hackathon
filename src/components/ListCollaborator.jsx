import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmailBtn from '../assets/img/Emailicon.png'
import DeletelBtn from '../assets/img/Delete.png'
import Divider from '@material-ui/core/Divider';

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
        },
      }));
     
      
      const MultiList = () => {
        const classes = useStyles();
      
        return (
          <div className={classes.root}>
             <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <ListItemText secondary="Elmer Figueroa" />
          <img src={EmailBtn} alt="" onClick/>
          <img src={DeletelBtn} alt="" onClick/>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText secondary="Enrique Morales" />
          <img src={EmailBtn} alt="" onClick/>
          <img src={DeletelBtn} alt="" onClick/>
        </ListItem>
        <Divider />
      </List>
          </div>
        );
      }

export default MultiList