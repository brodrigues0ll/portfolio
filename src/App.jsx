import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Perfil} />
            <Route exact path="/educacao" component={Educacao} />
            <Route exact path="/experiencia" component={Experiencia} />
            <Route exact path="/habilidades" component={Habilidades} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
