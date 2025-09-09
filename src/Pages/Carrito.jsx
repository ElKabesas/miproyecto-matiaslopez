import { useContext } from "react";
import { CartContext } from "../CartContext";

const Carrito = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.nombre} x {item.cantidad} = ${item.precio * item.cantidad}
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotalPrice()}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
