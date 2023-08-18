import "./styles.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Inicio
        </Link>
        <Link className="li" to="/about">
          Nosotros
        </Link>
        <Link className="li" to="/contact">
          Contacto
        </Link>
        <Link className="li" to="/product">
          Productos
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
