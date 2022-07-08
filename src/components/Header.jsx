import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav>
      <NavLink to="/">
        <img
         src="https://raw.githubusercontent.com/brodrigues0ll/portifolio/ba3b7b4024d26aa3ffbc7c95b75ab5bad29c4232/src/images/navbar/edit-profile.svg"
         alt="profle-icon"
         height="40"
        />
          Perfil
      </NavLink>


      <NavLink to="/educacao">
        <img
        src="https://raw.githubusercontent.com/brodrigues0ll/portifolio/ba3b7b4024d26aa3ffbc7c95b75ab5bad29c4232/src/images/navbar/graduation-cap.svg"
        alt="graduation-cap-icon"
        height="40"
      />
        Educação
      </NavLink>


      <NavLink to="/experiencia">
      <img
        src="https://raw.githubusercontent.com/brodrigues0ll/portifolio/ba3b7b4024d26aa3ffbc7c95b75ab5bad29c4232/src/images/navbar/necktie.svg"
        alt="necktie-icon"
        height="40"
      />
        Experiência
      </NavLink>


      <NavLink to="/habilidades">
      <img
        src="https://raw.githubusercontent.com/brodrigues0ll/portifolio/ba3b7b4024d26aa3ffbc7c95b75ab5bad29c4232/src/images/navbar/jet-with-arms.svg"
        alt="jet-with-arms-icon"
        height="40"
        className="jet-icon"
      />
        Habilidades
      </NavLink>
    </nav>
  )
}

export default Header