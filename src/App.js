import React from 'react'
import './styles/app.scss';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Forgot from './components/forgot'
import Register from './components/Register'
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route exact path='/login'>
         <Login/>
       </Route>
       <Route exact path='/forgot'>
         <Forgot/>
       </Route>
       <Route exact path='/register'>
         <Register/>
       </Route>
       <Route path="*">
         <NotFound/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
