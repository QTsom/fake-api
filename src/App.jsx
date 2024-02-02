import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';
import Menu3 from './pages/Menu3';
import Menu4 from './pages/Menu4';
import './assets/css/reset.css';
import './assets/css/style.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Menu1" element={<Menu1 />} />
          <Route path="/Menu2" element={<Menu2 />} />
          <Route path="/Menu3" element={<Menu3 />} />
          <Route path="/Menu4" element={<Menu4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;