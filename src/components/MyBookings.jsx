import React from 'react'
import Navbar from './Navbar'
import { Box, Grid, ThemeProvider } from '@material-ui/core'
import theme from '../themeConfig';
import Pic from '../assets/img/Pic.jpg';
import Avatar from '@material-ui/core/Avatar';
import Add from '../assets/img/Addicon.png';
import Delete from '../assets/img/Delete.png';
import Edit from '../assets/img/Edit.png';
import Email from '../assets/img/Emailicon.png';
import OutlinedCard from './Buttons';

const MyBookings = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navbar />
            </div>
            <div className='titles'>
                <h3>Mis Reservas</h3>
                <OutlinedCard />
            </div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={4}>
                    <Box>
                        <ul>
                            <li>
                                <span>Zona de trabajo</span>
                                <br />
                                <span>Escritorio</span>
                                <img src={Edit} alt="" onClick />
                                <img src={Delete} alt="" onClick />
                            </li>
                        </ul>
                    </Box>

                    <Grid
                        item xs={4}
                        row>
                        <Box>
                            <span>Sala de reuniones</span>
                            <br />
                            <span>Sala</span>
                            <p>Asunto:</p>
                            <Avatar alt="María José" src={Pic} />
                            <img src={Email} alt="" onClick />
                            <img src={Add} alt="" onClick />
                            <img src={Edit} alt="" onClick />
                            <img src={Delete} alt="" onClick />

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}

export default MyBookings
