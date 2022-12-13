import {Routes, Route } from "react-router-dom"
import Home from './Routing/HomeRoute'
import Login from './Routing/Auth/LoginRoute'
import Register from './Routing/Auth/RegRoute'

import V from "./Routing/Graphs/VRoute";
import V1 from "./Routing/Graphs/V1Route";
import V3 from "./Routing/Graphs/V3Route";
import V5 from "./Routing/Graphs/V5Route";
import V6 from "./Routing/Graphs/V6Route";
import V7 from "./Routing/Graphs/V7Route";
import V8 from "./Routing/Graphs/V8Route";
import V9 from "./Routing/Graphs/V9Route";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/V" element={<V />} />
        <Route path="/V1" element={<V1 />} />
        <Route path="/V3" element={<V3 />} />
        <Route path="/V5" element={<V5 />} />
        <Route path="/V6" element={<V6 />} />
        <Route path="/V7" element={<V7 />} />
        <Route path="/V8" element={<V8 />} />
        <Route path="/V9" element={<V9 />} />
      </Routes>
    </div>
  );
}