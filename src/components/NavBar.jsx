import React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  return (
    <nav className='navstyle'>
      <h1>Mi Tienda</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
