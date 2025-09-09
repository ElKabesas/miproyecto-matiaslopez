import { useParams } from "react-router-dom";
import productosData from "../data/productos.json";
import { Link } from "react-router-dom";
import Carrusel from "./Carrusel";

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();

  // si hay categoría, filtramos, si no mostramos todo
  const productosFiltrados = categoriaId
    ? productosData.filter((p) => p.categoria === categoriaId)
    : productosData;

  return (
    <div>
      <h2>{greeting}</h2>

      {!categoriaId && <Carrusel />} {/* carrusel solo en inicio */}

      <div className="productos-grid">
        {productosFiltrados.map((producto) => (
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