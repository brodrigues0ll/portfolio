import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Header from './components/Header';
import Educacao from './pages/Educacao';
import Experiencia from './pages/Experiencia';
import Habilidades from './pages/Habilidades';
import Footer from './components/Footer';

function App() {
  return (
      <div className="bg-fill" />
      <div className="bg-image" />

      <div className="card-container disable-select">
        <div className="card">
          <Header />
          <Switch>
            <Route exact path="/" element={<Perfil />} />
            <Route exact path="/educacao" element={<Educacao />} />
            <Route exact path="/experiencia" element={<Experiencia />} />
            <Route exact path="/habilidades" element={<Habilidades />} />
          </Switch>
          <Footer />
        </div>
      </div>
  );
}

export default App;
