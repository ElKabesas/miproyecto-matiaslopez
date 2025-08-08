import React from 'react';

const Item = ({ producto }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <img src={producto.imagen} alt={producto.nombre} width="150" />
    </div>
  );
};

export default Item;