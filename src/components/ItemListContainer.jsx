import Carrusel from "./Carrusel";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <Carrusel />
    </div>
  );
};

export default ItemListContainer;