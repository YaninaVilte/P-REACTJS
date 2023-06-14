const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">

                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
                <ItemCount initial={1} stock={stock} onAdd={(quantity => console.log('Cantidad agregada',))}>

                </ItemCount>
            </footer>
        </article>
    )
}