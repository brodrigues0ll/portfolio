import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Header from './components/Header';
import Educacao from './pages/Educacao';
import Experiencia from './pages/Experiencia';
import Habilidades from './pages/Habilidades';


function App() {
  return (
    <BrowserRouter>
      <div className="bg-fill"></div>
      <div className="bg-image"></div>

      <div className="card-container">
        <div className="card">
          <Header />
          <Routes>
            <Route exact path="/" element={<Perfil />} />
            <Route exact path="/educacao" element={<Educacao />} />
            <Route exact path="/experiencia" element={<Experiencia />} />
            <Route exact path="/habilidades" element={<Habilidades />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
