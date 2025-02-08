import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* The #page-wrapper will allow fade animations if needed */}
      <div id="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
