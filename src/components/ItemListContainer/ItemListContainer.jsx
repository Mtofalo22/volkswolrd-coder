import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import Loader from "../Loader/Loader.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  const fetchProducts = (category) => {
    const productsRef = collection(db, "products");
    let productsQuery;

    if (category) {
      productsQuery = query(productsRef, where("category", "==", category));
    } else {
      productsQuery = productsRef;
    }

    getDocs(productsQuery)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);        
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts(idCategory);
  }, [idCategory]);

  return (
    <div>
      <div className="item-list-tittle">
        <p className="saludo">{idCategory ? `Categoria: ${idCategory}` : "Bienvenidos a VolksWolrd"}</p>
      </div>
      {loading ? (
        <Loader/>
      ) : (
        <div className="item-list-container">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
