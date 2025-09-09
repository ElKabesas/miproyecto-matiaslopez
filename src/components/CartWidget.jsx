import { useContext } from "react";
import { CartContext } from "../CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div className="carrito">
      🛒 <span className="contador">{getTotalItems()}</span>
    </div>
  );
};

export default CartWidget;
