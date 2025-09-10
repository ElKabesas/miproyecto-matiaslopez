import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams(); // lee la categoría desde la URL
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        let q = productosRef;

        if (categoriaId) {
          q = query(productosRef, where("categoria", "==", categoriaId));
        }

        const snapshot = await getDocs(q);
        const productosFiltrados = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosFiltrados);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    fetchProductos();
  }, [categoriaId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <div className="productos-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="card">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="card-img"
              />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
