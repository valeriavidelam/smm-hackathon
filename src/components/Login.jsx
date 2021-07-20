//import PagesSharp from '@material-ui/icons';
import React from 'react';
import LogoEG from '../assets/img/LogoEG.png';
import LogoSmm from '../assets/img/LogoSmm.png';
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'


const Login = () => {

  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  const saveUser = (e) => {
    e.preventDefault()

    if(!user.trim()){
      return
    }
    if(!pass.trim()){
      return
    }
    e.target.reset()
    setUser('')
    setPass('')
  }

  return (
    <div>
      <div>
        <img src={LogoEG} alt=""/>
      </div>
      <div>
        <img src={LogoSmm} alt=""/>
        <h2>Iniciar sesión</h2>
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
  )
}

export default Login
