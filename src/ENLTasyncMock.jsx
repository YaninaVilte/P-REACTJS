const products = [
    {
        id: 1,
        category: "vinos",
        nombre: "Altos del Plata Malbec",
        precio: "$1500",
        img: "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61977_default_big.jpeg"
    },
    {
        id: 2,
        category: "vinos",
        nombre: "Rutini Malbec",
        precio: "$6000",
        img: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62006_default_big.jpeg"
    },
    {
        id: 3,
        category: "vinos",
        nombre: "Los Helechos Chardonnay",
        precio: "$4600",
        img: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62197_default_big.jpeg"
    },
    {
        id: 4,
        category: "cervezas",
        nombre: "Patagonia Km 24.7",
        precio: "$550",
        img: "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63949_default_big.jpeg"
    },
    {
        id: 5,
        category: "cervezas",
        nombre: "Beagle Cream Stout",
        precio: "$720",
        img: "https://www.espaciovino.com.ar/media/default/0001/68/thumb_67498_default_big.jpeg"
    },
    {
        id: 6,
        category: "cervezas",
        nombre: "Heineken Lata",
        precio: "$400",
        img: "https://www.espaciovino.com.ar/media/default/0001/55/thumb_54429_default_big.jpeg"
    },
    {
        id: 7,
        category: "cervezas",
        nombre: "Grolsch",
        precio: "$420",
        img: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62637_default_big.jpeg"
    },
    {
        id: 8,
        category: "cervezas",
        nombre: "Grolsch",
        precio: "$800",
        img: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52831_default_big.jpeg"
    },
    {
        id: 9,
        category: "aguatonica",
        nombre: "Bear",
        precio: "$600",
        img: "https://www.espaciovino.com.ar/media/default/0001/69/thumb_68062_default_big.jpeg"
    },
    {
        id: 10,
        category: "gin",
        nombre: "Gordons",
        precio: "$3500",
        img: "https://www.espaciovino.com.ar/media/default/0001/66/thumb_65278_default_big.jpeg"
    },
    {
        id: 11,
        category: "gin",
        nombre: "Hendricks",
        precio: "$18000",
        img: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52867_default_big.jpeg"
    },
    {
        id: 12,
        category: "gaseosas",
        nombre: "Coca Cola",
        precio: "$700",
        img: "https://www.espaciovino.com.ar/media/default/0001/68/thumb_67605_default_big.jpeg"
    },
    {
        id: 13,
        category: "gaseosas",
        nombre: "Sprite",
        precio: "$700",
        img: "https://www.espaciovino.com.ar/media/default/0001/68/thumb_67604_default_big.jpeg"
    },
    {
        id: 14,
        category: "vodka",
        nombre: "Absolut Blue",
        precio: "$7000",
        img: "https://www.espaciovino.com.ar/media/default/0001/68/thumb_67772_default_big.jpeg"
    },
    {
        id: 15,
        category: "vodka",
        nombre: "Smirnoff",
        precio: "$2000",
        img: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52844_default_big.jpeg"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500}
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
