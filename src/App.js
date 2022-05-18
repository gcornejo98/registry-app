import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Registry from './routes/Registry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registry" element={<Registry />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
