import { useEffect, useState } from "react";
import { getItems } from "../firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getItems().then((res) => setProductos(res));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.imagen} alt={producto.nombre} className="card-img" />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
