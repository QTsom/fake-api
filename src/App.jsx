import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import './assets/css/reset.css';
import './assets/css/style.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;