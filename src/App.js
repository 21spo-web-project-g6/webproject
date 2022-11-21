import './Styles/App.css';
import {Routes, Route } from "react-router-dom"

import V1 from './Routing/V1';

export default function App() {
  return (
    <div className="App">
      <Routes>
      
        <Route path='/' element={<V1 />} />
      </Routes>
    </div>
  );
}