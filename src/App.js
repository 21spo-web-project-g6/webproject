import './Styles/App.css';
import {Routes, Route } from "react-router-dom"

import Home from './Routing/Home'
import Login from './Routing/LoginRoute'
import Register from './Routing/RegRoute'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}