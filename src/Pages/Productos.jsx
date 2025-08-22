import productos from "../data/productos.json";
import "../App.css";
import { useContext } from "react";
import { CartContext } from "../CartContext"; 

const Productos = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <div key={producto.id} className="producto-card">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="producto-imagen" 
          />
          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
          <button onClick={() => addToCart(producto)} className="btn-agregar">
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productos;