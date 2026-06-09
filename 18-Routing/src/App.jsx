import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Routing App</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About  />} />
      </Routes>
    </div>
  );
}
export default App;