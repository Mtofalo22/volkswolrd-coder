import "./ItemListContainer.css"
import getProducts from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [ products, setProducts ] = useState([])
  const {idCategory} = useParams()

  useEffect(() => {
    getProducts ()
    .then ((respuesta) => {
      if (idCategory){
        const productsFilter = respuesta.filter((respuestaProduct)=> respuestaProduct.category === idCategory )
        setProducts(productsFilter)        
      }
      else{
      setProducts(respuesta);
    }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally (()=> {
      console.log("Finalizo la promesa");
    });
  }, [idCategory]);

  return (
    <div className="item-list-container"> 
      <p className="saludo">{saludo}</p>
      <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer