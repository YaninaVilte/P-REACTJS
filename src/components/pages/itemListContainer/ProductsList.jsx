import "./ProductsList.css";

export const ProductsList = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => {
          setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1 className="titulo">{greeting}</h1>
      <ItemList product={products}/>
    <div/>
  )
}

export default ItemListContainer