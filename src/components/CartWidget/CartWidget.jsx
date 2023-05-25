import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";

const cardWidget = () => {
  return (
    <div className="cartWidget">
      <BsFillCartCheckFill color="black" size="20px" />
      <span className="numeroCart">2</span>
    </div>
  );
};

export default cardWidget;
