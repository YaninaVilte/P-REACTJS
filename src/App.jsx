import Navbar from "./components/layout/navbar/Navbar";
import { ProductsList } from "./components/pages/itemListContainer/ProductsList";

const App = () => {
  let nombre = "pepe";
  let edad = 22;

  return (
    <div>
      <Navbar />
      <ProductsList nombre={nombre} edad={edad} />
    </div>
  );
};

export default App;
