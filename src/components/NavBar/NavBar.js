import "./styles.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Inicio
        </Link>
        <Link className="li" to="/Nosotros">
          Nosotros
        </Link>
        <Link className="li" to="/Productos">
          Productos
        </Link>
        <Link className="li" to="/Contacto">
          Contacto
        </Link>
        <Link className="li" to="/Portal">
          Portal
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
