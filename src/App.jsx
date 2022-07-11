import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Header from './components/Header';
import Educacao from './pages/Educacao';
import Experiencia from './pages/Experiencia';
import Habilidades from './pages/Habilidades';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-fill" />
      <div className="bg-image" />

      <div className="card-container disable-select">
        <div className="card">
          <Header />
          <Routes>
            <Route exact path="/" element={<Perfil />} />
            <Route exact path="/educacao" element={<Educacao />} />
            <Route exact path="/experiencia" element={<Experiencia />} />
            <Route exact path="/habilidades" element={<Habilidades />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
