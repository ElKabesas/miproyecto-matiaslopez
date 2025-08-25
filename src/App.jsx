import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Productos from "./Pages/Productos";
import Carrito from "./Pages/Carrito";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;