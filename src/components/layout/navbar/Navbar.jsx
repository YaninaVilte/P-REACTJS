import CartWidget from "../../CartWidget/CartWidget";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>.16</h1>
      <div>
        <button>Gin</button>
        <button>Vodka</button>
        <button>Cervezas</button>
        <button>Licores</button>
        <button>Vinos</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
