import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <PrivateRoute path='/placeOrder/:productId'>
            <NavBar></NavBar>
            <PlaceOrder></PlaceOrder>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path='/login'>
            <NavBar></NavBar>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <Route path='/register'>
            <NavBar></NavBar>
            <Registration></Registration>
            <Footer></Footer>
          </Route>
          <Route path='/verifyPage'>
            <VerifyEmail></VerifyEmail>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
