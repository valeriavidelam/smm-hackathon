//import PagesSharp from '@material-ui/icons';
import React from 'react';
import LogoEG from '../assets/img/LogoEG.png';
import LogoSmm from '../assets/img/LogoSmm.png';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {Typography} from '@material-ui/core';
=======
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { Box, ThemeProvider, Typography } from '@material-ui/core';
import theme from '../themeConfig';
>>>>>>> b4390896df3438d83d9e964d10443ec3da1d51dc


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
<<<<<<< HEAD
    <div className="Login">
      <div>
        <img src={LogoEG} alt="Logo Everis"/>
      </div>
      <div>
        <img src={LogoSmm} alt="Logo To Be"/>
        <Typography variant="h5" color="secondary" align="center">
          Iniciar Sesión
        </Typography>
      </div>
      <form onSubmit={saveUser}>
        <input 
        type="text" 
        className="user" 
        placeholder="Usuario" 
        onChange={ (e) => setUser(e.target.value) }/>
        <br /> 
        <input 
        type="text" 
        className="password" 
        placeholder="Contraseña" 
        onChange={ (e) => setPass(e.target.value) }/>
      </form>
      
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >       
        ¿Olvidaste tu contraseña?
      </Link>

      <Button variant="outlined" color="primary">
        Ingresar
      </Button>
    </div>
=======
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12}>
          <Box textAlign="start">
            <img src={LogoEG} alt="" />
            <br />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
            <img src={LogoSmm} alt="" />
            <br />
            <br />
            <Typography variant="h5" color="secondary">
              Iniciar sesión
            </Typography>
            <br />
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
              <br />
            <Button
              variant="outlined"
              color="primary"
              type="submit">
              Ingresar
            </Button>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
>>>>>>> b4390896df3438d83d9e964d10443ec3da1d51dc
  )
}

export default Login
