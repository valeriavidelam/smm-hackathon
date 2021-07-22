import React from 'react'
import { DeleteIcon, Typography } from "@material-ui/core";
import {Card, CardContent, CardActions } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

//const Buttons = () => {

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

     const OutlinedCard = () => {
        const classes = useStyles();
        return (
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Zona de trabajo
                        </Typography>
                        <Typography className={classes.pos} color="Secondary">
                            Escritorio
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    };

    export default OutlinedCard
