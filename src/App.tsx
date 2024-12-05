import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lista from './componentes/Lista';
import CriarBanco from './pages/CriarBanco';
import EditarBanco from './pages/EditarBanco';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/create" element={<CriarBanco />} />
        <Route path="/" element={<Lista />} />
        <Route path="/edit/:id" element={<EditarBanco />} />
      </Routes>
    </Router>
  );
};

export default App;
