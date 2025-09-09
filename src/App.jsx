import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Productos from "./Pages/Productos";
import Carrito from "./Pages/Carrito";
import Checkout from "./Pages/Checkout"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} /> 
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
    </>
  );
}

export default App;
