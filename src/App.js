import React from 'react'
import './styles/app.scss';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import AppLayout from './containers/AppLayout'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Forgot from './components/forgot'
import Register from './components/Register'
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' name='Home' render={props => <AppLayout {...props}/>}/>
       <Route exact path='/login' name='Login' render={props => <Login {...props}/>}/>
       <Route exact path='/forgot' name='Forgot' render={props =><Forgot {...props} />}/>
       <Route exact path='/register' name='Register' render={props =><Register {...props} />}/>
       <Route path="*">
         <NotFound/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
