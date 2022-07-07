import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Profile</Link>
      <Link to="/educacao">Educação</Link>
      <Link to="/experiencia">Experiência</Link>
      <Link to="/habilidades">Habilidades</Link>
    </nav>
  )
}

export default Header