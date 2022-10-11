import React from 'react'
import './App.css'
import Home from './Component/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Login from './Component/Login';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;