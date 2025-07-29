import { useState } from 'react';
import Navbar from '../src/Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './Context/PortfolioContext';
import Messages from './Pages/Messages';
function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Navbar />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />

  {/* Hidden Admin Route */}
  <Route path="/messages" element={<Messages />} />
</Routes>

      </Router>
    </PortfolioProvider>
  );
}

export default App;
