import React from 'react'; 

import {
  Routes, 
  Route
} from 'react-router-dom'; 

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Solutions from './components/Solutions';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/product" element={<Solutions />} />
        </Routes>
    </div>
  );
}

export default App;
