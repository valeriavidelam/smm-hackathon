import { Grid, ThemeProvider } from '@material-ui/core';
import React from 'react'
import Breadcrumbs from './Breadcrumb';
import Navbar from './Navbar';
import theme from '../themeConfig';
import OutlinedCardC from './CardSearchCol';

const SearchCollaborator = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
      </div>
      <br />
      <br />
      <Breadcrumbs />
      <div className='titles'>
        <h3>Buscar colaborador</h3>
      </div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={4}>
          <OutlinedCardC />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default SearchCollaborator
