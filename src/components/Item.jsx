import React from 'react';

const Item = ({ producto }) => {
  return (
    <div className="producto-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="producto-imagen"
      />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default Item;