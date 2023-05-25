import CardWidget from "../../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <h3>Ecommerce</h3>
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
