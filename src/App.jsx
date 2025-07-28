import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="Logo" className="logo" />

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Acerca</li>
      </ul>

      <div className="carrito">🛒</div>
    </div>
  );
}



export default App
