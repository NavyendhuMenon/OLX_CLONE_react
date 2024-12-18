import React from 'react';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import reactRouterDom from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path= '/'><Home /></Route>
        <Route path='/signup'><Signup/></Route>
        <Route path='/login'><Login/></Route>


      </Router>
      
    </div>
  );
}

export default App;
