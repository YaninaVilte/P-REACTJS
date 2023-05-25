import Navbar from "./components/layout/navbar/Navbar";
import { ProductsList } from "./components/pages/itemListContainer/ProductsList";

function App() {
  return (
    <div>
      <Navbar />
      <ProductsList greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
