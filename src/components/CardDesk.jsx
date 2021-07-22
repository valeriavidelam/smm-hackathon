import React from 'react'
import { Typography } from "@material-ui/core";
import {Card, CardContent, CardActions } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import EditBtn from '../assets/img/Edit.png'
import DeleteBtn from '../assets/img/Delete.png'

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
                        <Typography variant="h5" component="h2" color="Secondary">
                            Zona de trabajo
                        </Typography>
                        <Typography className={classes.pos} color="Secondary">
                            Sala G_5 Escritorio 10
                        </Typography>
                        <Typography className={classes.pos} color="Secondary">
                            30 de Julio 09:00 - 12:45hrs
                        </Typography>
                    </CardContent>
                    <CardActions>
                         <img src={EditBtn} alt="" onClick/>
                         <img src={DeleteBtn} alt="" onClick/>
                    </CardActions>
                </Card>
            </div>
        )
    };

    export default OutlinedCard
