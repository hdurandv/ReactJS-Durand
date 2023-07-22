import React from "react";
import "./styles.css"
import CartWidget from "./CartWidget";

const Navbar = () => {
    return <nav className="navbar">
        <div>
        <button>Inicio</button>
        <button>Nosotros</button>
        <button>Productos</button>
        <button>Contacto</button>
        <button>Portal</button>
        </div>

        <CartWidget />
    </nav>
}

export default Navbar;