import React from 'react';
import Item from './Item';
import productosData from '../data/productos.json';
import '../App.css';

const ItemList = () => {
  return (
    <div className="item-list-container">
      {productosData.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;