import CardWidget from "../../CartWidget/CartWidget";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>punto16</h3>
      <div>
        <button>Gin</button>
        <button>Vodka</button>
        <button>Cervezas</button>
        <button>Whisky</button>
        <button>Vinos</button>
      </div>
      <CardWidget />
    </nav>
  );
};

export default Navbar;
