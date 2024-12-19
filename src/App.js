import React, {useEffect, useContext } from 'react';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Components/Create/Create';

// import reactRouterDom from 'react-router-dom';
// import { AuthContext } from './store/Context';

function App() {

  // const {user} = useContext(AuthContext)
  
  // useEffect(()=>{
  //   console.log(user);
  // },[user])
  return (
    <div>
      <Router>
        <Route exact path= '/'><Home /></Route>
        <Route path='/signup'><Signup/></Route>
        <Route path='/login'><Login/></Route>
        <Route path ='/create' > < Create/> </Route>

      </Router>
      
    </div>
  );
}

export default App;
