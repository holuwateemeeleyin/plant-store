import React from 'react'
import './App.css'
import Home from './Component/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Login from './Component/Login';

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;