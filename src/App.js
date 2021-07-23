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
import SelectRoom from './components/SelectRoom';
import SearchCollaborator from './components/SearchCollaborator';
import BookingDesk from './components/BookingDesk';
import SelectDesk from './components/SelectDesk';
import Desk from './components/Desk';
import SuccessfulBooking from './components/SuccessfulBooking';
import MyBookings from './components/MyBookings';
import SuccessfulBooking2 from './components/SuccessfulBooking2';

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
          <Route path="/reservaexitosareu">
            <SuccessfulBooking2 />
          </Route>
          <Route path="/reservaescritorio">
            <BookingDesk/>
          </Route>
          <Route path="/seleccionarescritorio">
            <SelectDesk/>
          </Route>
          <Route path="/escritorio">
            <Desk/>
          </Route>
          <Route path="/reservasala">
            <BookingRoom />
          </Route>
          <Route path="/seleccionarsala">
            <SelectRoom />
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