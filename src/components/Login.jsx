//import PagesSharp from '@material-ui/icons';
import React from 'react';
import LogoEG from '../assets/img/LogoEG.png';
import LogoSmm from '../assets/img/LogoSmm.png';
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { Box, ThemeProvider, Typography } from '@material-ui/core';
import theme from '../themeConfig';


const Login = () => {

  const [user, setUser] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [data, setData] = React.useState([])

  const saveUser = (e) => {
    e.preventDefault()

    if (!user.trim()) {
      console.log('esta vacio user')
      return
    }
    if (!pass.trim()) {
      console.log('esta vacio pass')
      return
    }
    setData([
      ...data,
      { nameUser: user, namePass: pass }
    ])

    setUser('')
    setPass('')
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Box>
            <img src={LogoEG} alt="" />
          </Box>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <Grid item xs={12}>
            <Box textAlign="center">
              <img src={LogoSmm} alt="" />
              <Typography variant="h5" color="secondary">
                Iniciar sesión
              </Typography>
            </Box>
          </Grid>
          <Grid
            item xs={12}>
            <Box textAlign="center">
              <form onSubmit={saveUser}>
                <input
                  type="email"
                  className="user"
                  placeholder="Usuario"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
                <br />
                <input
                  type="password"
                  className="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </form>
            </Box>
          </Grid>
          <Grid
            item xs={12}>
            <Box textAlign="center">
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>
          </Grid>
          <Grid
            item xs={12}>
            <Box textAlign="center">
              <Button
                variant="outlined"
                color="primary"
                type="submit"
              >
                Ingresar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login
