import React from 'react'
import './styles/app.scss';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Forgot from './components/forgot'
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
       <Route path="*">
         <NotFound/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
