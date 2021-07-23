import React from 'react'
import Navbar from './Navbar'
import Breadcrumbs from './Breadcrumb';
import { Grid, ThemeProvider } from '@material-ui/core';
import theme from '../themeConfig';
import OutlinedCardProfile from './CardProfile';

const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <Breadcrumbs />
        <div className='titles'>
          <h1>Perfil</h1>
        </div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={4}>
            <OutlinedCardProfile />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Profile
