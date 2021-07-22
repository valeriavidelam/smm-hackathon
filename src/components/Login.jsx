//import PagesSharp from '@material-ui/icons';
import React from 'react';
import LogoEG from '../assets/img/LogoEG.png';
import LogoSmm from '../assets/img/LogoSmm.png';
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { Box, ThemeProvider, Typography } from '@material-ui/core';
import theme from '../themeConfig';
import {auth, db} from '../firebase';
import {withRouter} from 'react-router-dom';


const style = {
  background: 'linear-gradient(50deg, #81c784 20%, #8bc34a 90%)',
  borderRadius: 9,
  border: 2,
  color: 'white',
  width: 150,
  height: 50,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  margin: theme.spacing(1),
  
};


const Login = (props) => {

  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [error, setError] = React.useState(null)
  const [isRegister, setIsRegister] = React.useState(true)

  const processData = e => {
    e.preventDefault()
        if(!email.trim()){
        //console.log('Ingrese Email')
        setError('Ingrese Email')
        return
    }
    e.preventDefault()
        if(!pass.trim()){
        //console.log('Ingrese Contraseña')
        setError('Ingrese Contraseña')
        return
    }
    if(pass.length < 6){
        //console.log('La constraseña debe ser mayor a 6 carácteres')
        setError('La constraseña debe ser mayor a 6 carácteres')
        return

    }
    console.log('Procesando datos')
    setError(null)

    if(isRegister){
      register()
    }else{
      login()
    }
  }

  const login = React.useCallback(async () => {
    try {
        const res = await auth.signInWithEmailAndPassword(email, pass)
        console.log(res.user)
        setEmail('')
        setPass('')
        setError(null)
        props.history.push('/inicio')
    } catch (error) {
      console.log(error)
      if(error.code === 'auth/invalid-email'){
        console.log('Email no válido')
        setError('Email no válido')
      }
      if(error.code === 'auth/user-not-found'){
        console.log('Email no registrado')
        setError('Email no registrado')
      }
    }
  }, [email, pass, props.history])

  const register = React.useCallback( async() => {
      
      try {
          const res = await auth.createUserWithEmailAndPassword(email, pass)
          console.log(res.user)
          await db.collection('users').doc(res.user.uid.email).set({
            email: res.user.email,
            uid: res.user.uid
      })
      setEmail('')
      setPass('')
      setError(null)
      props.history.push('/inicio')

      } catch (error) {
        console.log(error)
        if(error.code === 'auth/invalid-email'){
          console.log('Email no válido')
          // setError('Email no válido')}
      }
        if(error.code === 'auth/email-already-in-use'){
          console.log('Este email ya está en uso')
          setError('Este email ya está en uso')
        }
      }  
    }, [email, pass, props.history])

  return (

      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12}>
          <Box textAlign="start">
            <img src={LogoEG} alt="LogoEveris" />
            <br />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
            <img src={LogoSmm} alt="" />
            <br />
            <br />
            <Typography variant="h5" color="secondary">
              {
                isRegister ? 'Crear Cuenta' : 'Iniciar Sesión'
              }
            </Typography>
            <br />
            </Box>
          </Grid>
          <Grid
            item xs={12}>
              <form onSubmit={processData}>
                {

                  error && (
                    <div className="divAlert">{error}</div>
                  )

                }
              <Box 
              textAlign="center">
                
              <input
                type="email"
                className="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                value={email}  
              />
              <br />
              <br />
              <input
                type="password"
                className="password"
                placeholder="Contraseña"
                onChange={e => setPass(e.target.value)}
                value={pass}                               
              />
            </Box>
        
              <Box textAlign="center">
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Olvidé mi contraseña
            </Link>
            </Box>
              <Box textAlign="center">
              <br />
            <Button 
            type="submit"
            style={style}>
              {
                isRegister ? 'Registrarse' : 'Acceder'
              }
            </Button>
            </Box>
            <Box textAlign="center">
            <Link
              type="button"
              variant="body2"
              onClick={() => {
                setIsRegister(!isRegister)}}
            >
              {
                isRegister ? '¿Ya tienes cuenta?' : '¿Eres nuevo?'
              }
              
            </Link>
            </Box>
            
            </form>
          </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default withRouter(Login)
