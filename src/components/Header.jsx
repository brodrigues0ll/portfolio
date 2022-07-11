import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import Profile from '../images/navbar/edit-profile.svg';
import Cap from '../images/navbar/graduation-cap.svg';
import Necktie from '../images/navbar/necktie.svg';
import Jet from '../images/navbar/jet-with-arms.svg';

function Header() {
  return (
    <nav>
      <NavLink to="/">
        <img
          src={Profile}
          alt="profle-icon"
          height="40"
        />
        Perfil
      </NavLink>

      <NavLink to="/educacao">
        <img
          src={Cap}
          alt="graduation-cap-icon"
          height="40"
        />
        Educação
      </NavLink>

      <NavLink to="/experiencia">
        <img
          src={Necktie}
          alt="necktie-icon"
          height="40"
        />
        Experiência
      </NavLink>

      <NavLink to="/habilidades">
        <img
          src={Jet}
          alt="jet-with-arms-icon"
          height="40"
        />
        Habilidades
      </NavLink>
    </nav>
  );
}

export default Header;
