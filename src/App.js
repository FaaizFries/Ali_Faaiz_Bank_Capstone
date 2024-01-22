import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopBar from './components/TopBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Stocks from './components/Stocks';

function App() {
  return (
    <Router>
      <TopBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stocks" element={<Stocks />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;