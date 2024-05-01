const products = [
    {
        id: "1",
        name: "Discos de Freno",
        description: "Discos de freno",
        price: 50000,
        stock: 6,
        category:"Repuestos originales",
        image:"/src/assets/productos/discofrenos.png"
    }    
]

const getProducts =() => {
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        resolve (products)
      }, 3000);
    });
};

export default getProducts