import React from 'react';
import profileImage from '../images/brodrigues-profile-image.jpg';
import './Perfil.css';

function Perfil() {
  return (
    <main>
      <img src={profileImage} alt="brodrigues-profile" height="200" />

      <section>
        <h1 className="name">Bernardo Rodrigues</h1>
        <p>
          Nascido e criado em
          <a href="as"> Córrego do Ouro</a>
          , região serrana da cidade de
          <a href="as"> Macaé - Rio de Janeiro</a>
          . Curioso tecnologicamente, querendo saber sempre como as coisas funcionavam, ganhei meu
          primeiro computador aos 8 anos de idade e desde então sou apaixonado por computação.
          Hoje aos 22 anos sou aluno na
          <a href="as"> Trybe </a>
          instituição de ensino de desenvolvimento web.
        </p>
      </section>
    </main>
  );
}

export default Perfil;
