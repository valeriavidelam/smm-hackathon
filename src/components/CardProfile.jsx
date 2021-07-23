import React from 'react'
import { Typography } from "@material-ui/core";
import { Card, CardContent, CardActions } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import EditBtn from '../assets/img/Edit.png'

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

const OutlinedCardProfile = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" color="Secondary">
                        María José Fernández
                    </Typography>
                    <Typography className={classes.pos} color="Secondary">
                        mjfernandez@everis.com
                    </Typography>
                    <Typography className={classes.pos} color="Secondary">
                        UX/UI Designer
                    </Typography>
                    <Typography className={classes.pos} color="Secondary">
                        Santiago - Chile
                    </Typography>
                </CardContent>
                <CardActions>
                    <img src={EditBtn} alt="" onClick />
                </CardActions>
            </Card>
        </div>
    )
};

export default OutlinedCardProfile