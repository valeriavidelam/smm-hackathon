import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themeConfig';
import Profile from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';


function App() {


  return (
    <ThemeProvider theme={theme}>
      <Router>
    <div>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/home">
          <Home />  
        </Route>
        <Route path="/">
          <Login />  
        </Route>
    </Switch>
  </div> 
</Router>

    </ThemeProvider>
    
  );
}

export default App;
