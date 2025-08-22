import { useContext } from "react";
import { CartContext } from "../CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      🛒 <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;