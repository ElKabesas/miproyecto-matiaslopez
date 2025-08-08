import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1rem', 
      backgroundColor: '#eee' 
    }}>
      <h1>Mi Tienda</h1>
      <CartWidget />
    </nav>
  );
};

export default Navbar;