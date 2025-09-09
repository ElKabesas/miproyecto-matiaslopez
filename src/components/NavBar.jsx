import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Catálogo</Link>
      <Link to="/categoria/remeras">Remeras</Link>
      <Link to="/categoria/pantalones">Pantalones</Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
};

export default Navbar;
