import React from 'react'
import { Typography } from "@material-ui/core";
import {Card, CardContent, CardActions } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import EditBtn from '../assets/img/Edit.png'
import DeleteBtn from '../assets/img/Delete.png'
import AddBtn from '../assets/img/Addicon.png'
import SimpleList from './List'

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

     const OutlinedCardT = () => {
        const classes = useStyles();
        return (
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2" color="Secondary">
                            Sala reuniones
                        </Typography>
                        <Typography className={classes.pos} color="Secondary">
                            Sala
                        </Typography>
                        <Typography className={classes.pos} color="Secondary">
                            Asunto:
                        </Typography>
                        <SimpleList />
                    </CardContent>
                    <CardActions>
                         <img src={AddBtn} alt="" onClick/>
                         <img src={EditBtn} alt="" onClick/>
                         <img src={DeleteBtn} alt="" onClick/>
                    </CardActions>
                </Card>
            </div>
        )
    };

    export default OutlinedCardT