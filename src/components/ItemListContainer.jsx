import Carrusel from "./Carrusel";
import productosData from "../data/productos.json";
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>

      <Carrusel />


      <div className="productos-grid">
        {productosData.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.imagen} alt={producto.nombre} className="card-img" />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>
              <button>Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;