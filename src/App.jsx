import Navbar from "./components/layout/navbar/Navbar";
import { ProductsList } from "./components/pages/itemListContainer/ProductsList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsList greeting={"Bienvenidos"} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
