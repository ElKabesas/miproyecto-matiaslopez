import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = async () => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No existe ese producto");
      }
    };

    getProducto();
  }, [id]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
