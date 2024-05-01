import "./ItemListContainer.css"
import getProducts from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
 
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getProducts ()
    .then ((respuesta) => {
      setProducts(respuesta);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally (()=> {
      console.log("Finalizo la promesa");
    });
  }, []);

  return (
    <div className="item-list-container"> 
      <p>{saludo}</p>
      <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer