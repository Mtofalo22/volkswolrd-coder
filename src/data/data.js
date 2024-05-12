const products = [
    {
        id: "1",
        name: "Discos de Freno delanteros Volkwsagen Golf",
        description: "Discos de freno compatibles con todos los modelos de Volkswagen Golf, tambien compatibles con Vento, Bora, Passat.",
        price: 50000,
        stock: 20,
        category:"repuestos-originales",
        image:"/src/assets/productos/discofrenos.png"
    },
    {
      id: "2",
      name: "Aceite sintetico Motul 8100",
      description: "Aceite sintetico Motul 8100 para motores aspirados de inyección directa y motores Turbo, así sea a Nafta o Diesel.",
      price: 69000,
      stock: 20,
      category:"mantenimiento",
      image:"/src/assets/productos/aceitemotul.jpeg",
  }, 
  {
    id: "3",
    name: "Turbo Garret",
    description: "La línea de turbos Garret es la mejor opción para darle el plus de potencia que tu auto necesita.",
    price: 150000,
    stock: 12,
    category:"performance",
    image:"/src/assets/productos/turbogarrett.jpg",
}     
]

const getProducts =() => {
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        resolve (products)
      }, 1000);
    });
};

export default getProducts