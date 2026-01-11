import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fundamentals from './pages/Fundamentals';
import Compendium from './pages/Compendium';
import Operations from './pages/Operations';
import Governance from './pages/Governance';
import Tools from './pages/Tools';
import Glossary from './pages/Glossary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fundamentals" element={<Fundamentals />} />
      <Route path="/compendium" element={<Compendium />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/governance" element={<Governance />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/glossary" element={<Glossary />} />
    </Routes>
  );
}

export default App;
