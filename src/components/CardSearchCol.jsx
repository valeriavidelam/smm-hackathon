import React from 'react'
import { Typography } from "@material-ui/core";
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import MultiList from './ListCollaborator'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

const OutlinedCardC = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <ListItem>
                        <ListItemText secondary="Search" />
                        <SearchIcon />
                    </ListItem>
                    <Divider />
                    <br />
                    <Typography className={classes.pos} color="Secondary">
                        Colaboradores presentes hoy:
                    </Typography>
                    <MultiList />
                </CardContent>
            </Card>
        </div>
    )
};

export default OutlinedCardC