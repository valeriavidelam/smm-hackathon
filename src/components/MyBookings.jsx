import React from 'react'
import Navbar from './Navbar'
import { Grid, ThemeProvider } from '@material-ui/core'
import theme from '../themeConfig';
import OutlinedCard from './CardDesk';
import OutlinedCardT from './CardRoom';
import Breadcrumbs from './Breadcrumb'

const MyBookings = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navbar />
            </div>
            <br />
            <br />
            <Breadcrumbs />
            <div className='titles'>
                <h3>Mis Reservas</h3>
            </div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Grid >
                    <OutlinedCard />
                    <Grid >
                        <OutlinedCardT />
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}

export default MyBookings
