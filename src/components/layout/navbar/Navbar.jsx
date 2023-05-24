import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <h4>Imagen</h4>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <div>
        <BsFillCartCheckFill color="red" size="20px" />
        <span>2</span>
      </div>
    </div>
  );
};

export default Navbar;
