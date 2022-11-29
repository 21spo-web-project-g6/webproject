import './Styles/App.css';
import {Routes, Route } from "react-router-dom"
import Home from './Routing/HomeRoute'
import Login from './Routing/LoginRoute'
import Register from './Routing/RegRoute'
import V1 from "./Routing/V1";
import V3 from "./Routing/V3";
import V5 from "./Routing/V5";
import V6 from "./Routing/V6";
import V7 from "./Routing/V7";
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/V1" element={<V1 />} />
        <Route path="/V3" element={<V3 />} />
        <Route path="/V5" element={<V5 />} />
        <Route path="/V6" element={<V6 />} />
        <Route path="/V7" element={<V7 />} />
      </Routes>
    </div>
  );
}

