import { useContext } from "react";
import { CartContext } from "../CartContext";

const Carrito = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;