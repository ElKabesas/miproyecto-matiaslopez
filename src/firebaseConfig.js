// Importar Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDI6QIZtovYLDrTKraAOrr7GX7wXXvKpkA",
  authDomain: "matiaslopezcoderhouse.firebaseapp.com",
  projectId: "matiaslopezcoderhouse",
  storageBucket: "matiaslopezcoderhouse.appspot.com",
  messagingSenderId: "854163304041",
  appId: "1:854163304041:web:a844e99e2f46c617db3cf8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);

// Función para traer productos
export async function getItems() {
  const productosCol = collection(db, "productos");
  const productosSnapshot = await getDocs(productosCol);
  const productosList = productosSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return productosList;
}
