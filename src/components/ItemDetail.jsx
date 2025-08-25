const ItemDetail = ({ producto }) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} width="200" />
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default ItemDetail;