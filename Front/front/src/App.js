import React from 'react'; 

import {
  Routes, 
  Route
} from 'react-router-dom'; 

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Solutions from './components/Solutions';
import Documentation from './components/Documentation';
import Faq from './components/Faq';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route 
            exact path="/" 
            element={<HomePage />} 
          />
          <Route 
            exact path="/product" 
            element={<Solutions />} 
          />
          <Route 
            exact path="/documentation-file"
            element={<Documentation />}
          />
          <Route 
            exact path="/faq-ask"
            element={<Faq />}
          />
        </Routes>
    </div>
  );
};

export default App;
