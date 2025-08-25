import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosData from "../data/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = new Promise((resolve) => {
      setTimeout(() => {
        const encontrado = productosData.find((prod) => prod.id === parseInt(id));
        resolve(encontrado);
      }, 1000); // simula fetch con retardo
    });

    getProducto.then((res) => setProducto(res));
  }, [id]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;