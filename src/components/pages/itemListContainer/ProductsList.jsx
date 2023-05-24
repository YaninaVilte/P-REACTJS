import Counter from "../../common/counter/Counter";

export const ProductsList = ({ nombre, edad }) => {
  return (
    <>
      <h1>Aca van los productos</h1>
      <h3>Hola {nombre}</h3>
      <h4>Mi edad es {edad}</h4>
      <Counter />
    </>
  );
};
