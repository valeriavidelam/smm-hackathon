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
import BookingRoom from './components/BookingRoom';
import SearchCollaborator from './components/SearchCollaborator';
import BookingDesk from './components/BookingDesk';
import SelectDesk from './components/SelectDesk';
import Desk from './components/Desk';
import SuccessfulBooking from './components/SuccessfulBooking';
<<<<<<< HEAD
import MyBookings from './components/MyBookings';
=======
import SelectDesk from './components/SelectDesk';
>>>>>>> 82e5c750efb951489fd575a6de01b9e9f5241782

function App() {


return (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Login />  
          </Route>
          <Route path="/inicio">
            <Home />  
          </Route>
          <Route path="/reservaexitosa">
            <SuccessfulBooking />
          </Route>
          <Route path="/reservaescritorio">
            <BookingDesk/>
          </Route>
          <Route path="/seleccionarescritorio">
            <SelectDesk/>
          </Route>
<<<<<<< HEAD
          <Route path="/escritorio">
            <Desk/>
          </Route>
=======
>>>>>>> 82e5c750efb951489fd575a6de01b9e9f5241782
          <Route path="/reservasala">
            <BookingRoom />
          </Route>
          <Route path="/buscarcolaborador">
            <SearchCollaborator />
          </Route>
          <Route path="/perfil">
            <Profile />
          </Route>
          <Route path="/misreservas">
            <MyBookings />  
          </Route>
         </Switch>
      </div> 
    </Router>
  </ThemeProvider>
  
  );
}

export default App;