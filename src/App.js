import React from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>      
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/signup" element={ <Signup/> }/>
          <Route path="/login" element={ <Login/> }/>

        </Routes>
    </div>
  );
}

export default App;
