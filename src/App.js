import './Styles/App.css';
import {Routes, Route } from "react-router-dom"

import Home from './Routing/HomeRoute'
import Login from './Routing/LoginRoute'
import Register from './Routing/RegRoute'

import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}